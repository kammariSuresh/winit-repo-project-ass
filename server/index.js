
const express = require('express');
const app = express();

// Use process.env.PORT if available, otherwise use a default port (e.g., 3000)
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});



// const express = require("express");
// const cors = require("cors");
// const bodyParser = require("body-parser");
// const sqlite3 = require("sqlite3").verbose();

// const app = express();
// const PORT = process.env.PORT || 3000;

// const db = new sqlite3.Database(":memory:");

// db.serialize(() => {
//   db.run(`CREATE TABLE IF NOT EXISTS loadTemplate (
//     id INTEGER PRIMARY KEY AUTOINCREMENT,
//     UID VARCHAR(250),
//     TemplateName VARCHAR(250),
//     TemplateDescription VARCHAR(250),
//     ItemCount INT
//   )`);

//   db.run(`CREATE TABLE IF NOT EXISTS loadTemplateLine (
//     id INTEGER PRIMARY KEY AUTOINCREMENT,
//     UID VARCHAR(250),
//     LoadTemplateUID VARCHAR(250),
//     SKUCode VARCHAR(250),
//     UOMCode VARCHAR(50),
//     MonQty DECIMAL(18, 2),
//     TueQty DECIMAL(18, 2),
//     WedQty DECIMAL(18, 2),
//     ThuQty DECIMAL(18, 2),
//     FriQty DECIMAL(18, 2),
//     SatQty DECIMAL(18, 2)
//   )`);

//   db.run(`CREATE TABLE IF NOT EXISTS products (
//     ID INTEGER PRIMARY KEY,
//     Code VARCHAR(250),
//     Name VARCHAR(250)
//   )`);

//   // Insert sample data into products table
//   db.run(`INSERT INTO products (Code, Name) VALUES ('SKU001', 'Product 1')`);
//   db.run(`INSERT INTO products (Code, Name) VALUES ('SKU002', 'Product 2')`);
//   db.run(`INSERT INTO products (Code, Name) VALUES ('SKU003', 'Product 3')`);
//   db.run(`INSERT INTO products (Code, Name) VALUES ('SKU001', 'Product 4')`);
//   db.run(`INSERT INTO products (Code, Name) VALUES ('SKU002', 'Product 5')`);
//   db.run(`INSERT INTO products (Code, Name) VALUES ('SKU003', 'Product 6')`);
// });

// app.use(cors());
// app.use(bodyParser.json());

// app.get("/loadTemplates", (req, res) => {
//   let { sortBy, sortOrder, page, pageSize } = req.query;
//   console.log(sortBy, sortOrder, page);
//   // Default values in case query parameters are not provided
//   sortBy = sortBy || "id";
//   sortOrder = sortOrder || "ASC";
//   page = parseInt(page) || 1;
//   pageSize = parseInt(pageSize) || 10;

//   const offset = (page - 1) * pageSize;
//   const orderBy = `${sortBy} ${sortOrder}`;

//   const sql = `SELECT * FROM loadTemplate ORDER BY ${orderBy} LIMIT ${pageSize} OFFSET ${offset}`;

//   db.all(sql, (err, rows) => {
//     if (err) {
//       console.error("Error fetching load templates:", err);
//       return res.status(500).json({ error: "Internal Server Error" });
//     }
//     res.json(rows);
//   });
// });

// app.post("/loadTemplates", (req, res) => {
//   const { UID, TemplateName, TemplateDescription, ItemCount } = req.body;
//   console.log(UID, TemplateName);
//   const sql = `INSERT INTO loadTemplate (UID, TemplateName, TemplateDescription, ItemCount) VALUES (?, ?, ?, ?)`;

//   db.run(
//     sql,
//     [UID, TemplateName, TemplateDescription, ItemCount],
//     function (err) {
//       if (err) {
//         console.error("Error adding load template:", err);
//         return res.status(500).json({ error: "Internal Server Error" });
//       }
//       res.status(201).json({ id: this.lastID });
//     }
//   );
// });

// // let products = [];

// // // Endpoint to handle adding products
// // app.post("/addProducts", (req, res) => {
// //   const newProducts = req.body;
// //   // Assuming newProducts is an array of product objects
// //   products = [...products, ...newProducts];
// //   console.log("Added products:", newProducts);
// //   res.status(200).json({ message: "Products added successfully" });
// // });

// // Endpoint to retrieve products (for demonstration purposes)
// // app.get("/products", (req, res) => {
// //   res.status(200).json(products);
// // });

// app.get("/products", (req, res) => {
//   const sql = `SELECT * FROM products`;

//   db.all(sql, (err, rows) => {
//     if (err) {
//       console.error("Error fetching products:", err);
//       return res.status(500).json({ error: "Internal Server Error" });
//     }
//     res.json(rows);
//   });
// });

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
