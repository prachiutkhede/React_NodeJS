const express = require("express");
const app = express();
const fs = require("fs");
const cors = require("cors");
const mysql = require("mysql2");
const users = require("./data.json");
const { userModel } = require("./models/user");
const MysqlConnection = require("./connection");
const path = require("path");

const useRouter = require("./routes/user");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  fs.appendFile(
    "log.txt",
    `\n${Date.now()}:${req.method}:${req.path}`,
    (err, data) => {
      next();
    }
  );
});

// const connection = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "RadhaSwami1987",
//   database: "user_db",
// });

userModel(MysqlConnection);

// Connect and initialize table
// connection.connect((err) => {
//   if (err) {
//     console.error("❌ MySQL connection error:", err);
//     return;
//   }
//   console.log("✅ Connected to MySQL");

//   const createUsers = `
//     CREATE TABLE IF NOT EXISTS users (
//       id INT AUTO_INCREMENT PRIMARY KEY,
//       name VARCHAR(100),
//       email VARCHAR(100) UNIQUE,
//       address VARCHAR(255),
//       gender VARCHAR(10)
//     )
//   `;
//   connection.query(createUsers, (err) => {
//     if (err) throw err;
//     console.log("✅ Users table created or already exists");
//   });
// });

//GET users route
// //
//});
app.set("view engine", "ejs");
app.set("views", path.resolve("./view"));
app.use("/user", useRouter);

app.get("/user", (req, res) => {
  const url = req.url;

  return res.render("views", { url: url });
});

// Start server
app.listen(5000, () => {
  console.log("🚀 Server running on port 5000");
});

// app
//   .route("/api/users/:id")
//   .get((req, res) => {
//     const id = Number(req.params.id);
//     const user = users.find((user) => user.id === id);
//     return res.json(user);
//   })
//   .patch((req, res) => {})
//   .delete((req, res) => {});

// // app.use(cors(corsOptions));
// app.get("/users", (req, res) => {
//   const html = `<ul>${users.map(
//     (user) => `<li>${user.first_name}</li>`
//   )} </ul>`;
//   return res.status(200).end(html);
// });

// app.get("/api/users", (req, res) => {
//   return res.json(users);
// });

// app.get("/api/users/:id", (req, res) => {
//   const id = Number(req.params.id);
//   const user = users.find((user) => user.id === id);
//   return res.json(user);
// });
