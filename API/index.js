const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "admin",
  database: "db_iproducts",
});

app.use(cors());
app.use(express.json());

app.post("/login", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  let sql = "SELECT * FROM users WHERE email = ? AND password = ?";

  db.query(sql, [email, password], (err, result) => {
    err && res.send(err);
    result.length > 0 ? res.send({ login: true }) : res.send({ login: false });
  });
});

app.get("/getProducts", (req, res) => {
  let sql = "SELECT * FROM products";

  db.query(sql, (err, response) => {
    err ? res.send(err) : res.send(response);
  });
});

app.get("/getProductById/:id", (req, res) => {
  const { id } = req.params;

  let sql = "SELECT * FROM products WHERE id_product = ?";

  db.query(sql, [id], (err, response) => {
    err ? res.send(err) : res.send(response);
  });
});

app.delete("/delete/:id", (req, res) => {
  const { id } = req.params;

  let sql = "DELETE FROM products WHERE id_product = ?";

  db.query(sql, [id], (err, response) => {
    err ? res.send(err) : res.send(response);
  });
});

app.post("/setProduct", (req, res) => {
  const { name } = req.body;
  const { price } = req.body;
  const { description } = req.body;

  let sql = "INSERT INTO products (name, price, description) VALUES (?, ?, ?)";

  db.query(sql, [name, price, description], (err, response) => {
    err ? res.send(err) : res.send(response);
  });
});

app.listen(3001, () => {
  console.log("listen on port 3001");
});
