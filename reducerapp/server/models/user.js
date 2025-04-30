function userModel(connection) {
  connection.connect((err) => {
    if (err) {
      console.error("❌ MySQL connection error:", err);
      return;
    }
    console.log("✅ Connected to MySQL");

    const createUsers = `
      CREATE TABLE IF NOT EXISTS users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(100),
        email VARCHAR(100) UNIQUE,
        address VARCHAR(255),
        gender VARCHAR(10)
      )
    `;
    connection.query(createUsers, (err) => {
      if (err) throw err;
      console.log("✅ Users table created or already exists");
    });
  });
}

module.exports = {
  userModel,
};
