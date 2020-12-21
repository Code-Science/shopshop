const mysql = require('mysql');
const data = require('./data.json');

// console.log(data.Categories);
const connection = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  port: process.env.MYSQL_PORT,
  database: process.env.MYSQL_DATABASE,
  user: process.env.MYSQL_USERNAME,
  password: process.env.MYSQL_PASSWORD,
});

const q = 'INSERT INTO Categories (id, category, category_for) VALUES ?';

connection.query(q, [data.Categories], (err, result) => {
  console.log(err);
  console.log(result);
});

const qu =
  'INSERT INTO Products (product_name, price, image1, image2, image3, category_id) VALUES ?';

connection.query(qu, [data.Products], (err, result) => {
  console.log(err);
  console.log(result);
});

connection.end();
