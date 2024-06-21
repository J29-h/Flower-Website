// config/db.js

const mysql = require('mysql');

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "root",
  database: "plants",
  port:8889
});

// Acquire a connection from the pool
db.getConnection((err, connection) => {
  if (err) {
    console.error('Error connecting to database:', err);
    return;
  }

  console.log('Connected to the database succefuly');

  // Release the connection back to the pool
  connection.release();
});

// Export the pool
module.exports = db;


