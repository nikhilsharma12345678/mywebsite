// // Default Admin Credentials (you can change)
// const ADMIN_USERNAME = "admin";
// const ADMIN_PASSWORD = "12345";

// function login() {
//   const username = document.getElementById("username").value.trim();
//   const password = document.getElementById("password").value.trim();
//   const errorMsg = document.getElementById("error-message");

//   if (username === "" || password === "") {
//     errorMsg.textContent = "Please fill all fields.";
//     return;
//   }

//   if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
//     // Save login state in localStorage
//     localStorage.setItem("isAdminLoggedIn", "true");
//     window.location.href = "index.html"; // Redirect to admin dashboard
//   } else {
//     errorMsg.textContent = "Invalid username or password!";
//   }
// }

// function togglePassword() {
//   const pwdField = document.getElementById("password");
//   pwdField.type = pwdField.type === "password" ? "text" : "password";
// }
