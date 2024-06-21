const pool = require('../config/db'); 

// Function to find a user by username and password
function findOne(username, password) {
  return new Promise((resolve, reject) => {
    const query = 'SELECT * FROM users WHERE username = ? AND password = ?';
    pool.query(query, [username, password], (err, results) => {
      if (err) {
        console.error('Error executing query:', err);
        reject(err);
      } else {
        resolve(results[0]);
      }
    });
  });
}

// Function to create a new user
function create(username, password) {
  return new Promise((resolve, reject) => {
    if (!username || !password) {
      reject(new Error('Username and password are required'));
      return;
    }

    const query = 'INSERT INTO users (username, password) VALUES (?, ?)';
    pool.query(query, [username, password], (err, results) => {
      if (err) {
        console.error('Error executing query:', err);
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
}
function checkUsernameExists(username) {
  return new Promise((resolve, reject) => {
    const query = 'SELECT * FROM users WHERE username = ?';
    pool.query(query, [username], (err, results) => {
      if (err) {
        console.error('Error executing query:', err);
        reject(err);
      } else {
        resolve(results.length > 0); 
      }
    });
  });
}

module.exports = {
  findOne,
  create,
  checkUsernameExists
};
