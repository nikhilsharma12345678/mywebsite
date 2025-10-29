// const express = require('express');
// const cors = require('cors');

// const app = express();
// const PORT = 5001; // Different port

// // Middleware
// app.use(cors());
// app.use(express.json());

// // In-memory user database
// let users = [
//   { username: "nikhil", password: "1234", email: "nikhil@example.com" },
//   { username: "rahul", password: "abcd", email: "rahul@example.com" }
// ];

// // ===== REGISTER =====
// app.post('/api/users/register', (req, res) => {
//   const { username, password, email } = req.body;
//   if(!username || !password || !email) {
//     return res.status(400).json({ message: "All fields required!" });
//   }

//   const existingUser = users.find(u => u.username === username || u.email === email);
//   if(existingUser) return res.status(400).json({ message: "User already exists!" });

//   const newUser = { username, password, email };
//   users.push(newUser);
//   res.json({ message: "User registered successfully!", user: newUser });
// });

// // ===== LOGIN =====
// app.post('/api/users/login', (req, res) => {
//   const { username, password } = req.body;
//   const user = users.find(u => u.username === username && u.password === password);
//   if(!user) return res.status(401).json({ message: "Invalid username or password!" });

//   res.json({ message: "Login successful!", user });
// });



// // ===== GET ALL USERS =====
// app.get('/api/users', (req, res) => {
//   res.json({ users });
// });

// // ===== Catch-All 404 =====
// app.use((req, res) => res.status(404).json({ message: "Route not found" }));

// // Start server
// app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
