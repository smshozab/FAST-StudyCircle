const express = require("express");
const mysql = require("mysql");
const bcrypt = require("bcrypt"); // For password hashing
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json()); // To parse JSON bodies

// MySQL connection setup
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "fast_study_circle", // Change this to your DB name
});

db.connect((err) => {
  if (err) throw err;
  console.log("Connected to MySQL");
});

// **Routes**

// 1. Register (for both Teacher and Student)
app.post("/register", async (req, res) => {
    const { email, password, role } = req.body;

    if (!email || !password || !role) {
        return res.status(400).json({ error: "Email, password, and role are required" });
    }

    const hashedPassword = await bcrypt.hash(password, 10); // Hash the password

    const query = "INSERT INTO users (email, password, role) VALUES (?, ?, ?)";
    db.query(query, [email, hashedPassword, role], (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(201).json({ message: "User registered successfully!" });
    });
});

// 2. Login
app.post("/login", (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ error: "Email and password are required" });
    }

    const query = "SELECT * FROM users WHERE email = ?";
    db.query(query, [email], async (err, results) => {
        if (err) {
            console.error("Database error:", err);
            return res.status(500).json({ error: "Database error", details: err });
        }

        if (results.length === 0) {
            return res.status(404).json({ error: "User not found" });
        }

        const user = results[0];
        console.log("User retrieved from DB:", user);

        try {
            // Use the correct column name: `user.PASSWORD` instead of `user.password`
            if (!user.PASSWORD) {
                return res.status(500).json({ error: "No password found for this user" });
            }

            const isPasswordValid = await bcrypt.compare(password, user.PASSWORD);
            if (!isPasswordValid) {
                return res.status(401).json({ error: "Invalid credentials" });
            }

            res.status(200).json({ message: "Login successful", role: user.role });
        } catch (err) {
            console.error("Password validation error:", err);
            res.status(500).json({ error: "Error validating password", details: err });
        }
    });
});



// 3. Optional: Fetch all users
app.get("/users", (req, res) => {
  const query = "SELECT * FROM users";
  db.query(query, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(200).json(results);
  });
});

// Start the server
app.listen(4000, () => {
  console.log("Server running on http://localhost:4000");
});
