const db = require('../config/db');

const contactModel = {
  submitContactForm: (name, email, subject, message) => {
    const sql = 'INSERT INTO contact (name, email, subject, message) VALUES (?, ?, ?, ?)';

    return new Promise((resolve, reject) => {
      db.query(sql, [name, email, subject, message], (err, results) => {
        if (err) {
          reject(err);
        } else {
          if (results && results.insertId) {
            resolve(results.insertId);
          } else {
            reject(new Error('Failed to submit the contact form'));
          }
        }
      });
    });
  },
  getAllMessages: () => {
    const sql = 'SELECT * FROM contact';
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

module.exports = contactModel;
