const mysql = require("mysql2/promise");

const mySqlPool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "Prat123456@",
  database: "bookcamp",
});

// const mySqlPool = mysql.createPool({
//   host: process.env.HOST,
//   user: process.env.USERNAME,
//   password: process.env.PASSWORD,
//   database: "bookcamp",
// });

module.exports = mySqlPool;
