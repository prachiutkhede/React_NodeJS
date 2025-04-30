const connection = require("../connection");

const handleGetUserbyId = (req, res) => {
  const { id } = req.params;
  const sql = `SELECT * from users where id = ?`;
  connection.query(sql, [id], (err, result) => {
    if (err) {
      console.log("Error retreving user:", err);
      return res.status(500).json({ error: "Databvase error" });
    }
    if (result.length === 0) {
      return res.status(404).json({ error: "User not found" });
    }
    console.log("User successfullly retrieved", result);
    return res.status(200).json(result[0]);
  });
};

const handlepatchUserbyId = (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const sql = `UPDATE users SET name = ?  WHERE id = ? `;
  connection.query(sql, [name, id], (err, result) => {
    if (err) {
      console.error("❌ Error updating user:", err);
      return res.status(500).json({ error: "Database error" });
    }

    if (result.affectedRows === 0) {
      return res.status(404).json({ error: "User not found" });
    }

    console.log("✅ User updated:", result);
    return res.status(200).json({ status: result });
  });
};

const handlePostUser = (req, res) => {
  console.log("📥 Request received:", req.body);

  const { name, email, address, gender } = req.body;

  if (!name || !email || !address || !gender) {
    return res.status(400).json({ error: "All fields are required." });
  }

  const sql = `INSERT INTO users (name, email, address, gender) VALUES (?, ?, ?, ?)`;

  connection.query(sql, [name, email, address, gender], (err, result) => {
    if (err) {
      console.error("❌ Error inserting user:", err);
      return res.status(500).json({ error: "Database error" });
    }

    console.log("✅ User added successfully with ID:", result.insertId);
    return res
      .status(201)
      .json({ status: "User added", userId: result.insertId });
  });
};

module.exports = { handleGetUserbyId, handlepatchUserbyId, handlePostUser };
