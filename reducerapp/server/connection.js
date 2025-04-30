const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "RadhaSwami1987",
  database: "user_db",
});

module.exports = connection;
