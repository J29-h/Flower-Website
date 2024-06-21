const db = require('../config/db');

const planetModel = {
  addPlanetToDB: (name, description, price, image) => {
    const sql = 'INSERT INTO plants_added (name, description, price, image) VALUES (?, ?, ?, ?)';

    return new Promise((resolve, reject) => {
      db.query(sql, [name, description, price, image], (err, results) => {
        if (err) {
          reject(err);
        } else {
          if (results && results.insertId) {
            resolve(results.insertId);
          } else {
            reject(new Error('Failed to add the planet'));
          }
        }
      });
    });
  },
  getPlantsFromDB: () => {
    const sql = 'SELECT * FROM plants_added ';

    return new Promise((resolve, reject) => {
      db.query(sql, (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    });
  },

};

module.exports = planetModel;
