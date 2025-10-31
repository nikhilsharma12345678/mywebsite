
// // const VENDOR_EMAIL = "nikhil2007sm09@gmail.com";
// // const VENDOR_PASSWORD = "nikhil123";
// // const VENDOR_DASHBOARD_URL = "vendor_dashboard.html"; 


// // function handleLogin(event) {
// //     event.preventDefault(); 
    
// //     const emailInput = document.getElementById('email').value;
// //     const passwordInput = document.getElementById('password').value;
// //     const messageElement = document.getElementById('loginMessage');
    
// //     // Clear previous messages
// //     messageElement.textContent = "";
// //     messageElement.className = "login-message";

// //     // --- Authentication Simulation ---
// //     if (emailInput === VENDOR_EMAIL && passwordInput === VENDOR_PASSWORD) {
// //         // Successful Login
// //         messageElement.classList.add('message-success');
// //         messageElement.textContent = "Login Successful! Redirecting to Vendor Panel...";
        
// //         // Use a small delay for a better user experience before redirecting
// //       setTimeout(() => {
// //     window.location.href = "vendor_dashboard.html";
// // }, 500);


// //     } else if (emailInput === VENDOR_EMAIL && passwordInput !== VENDOR_PASSWORD) {
// //         // Wrong Password
// //         messageElement.classList.add('message-error');
// //         messageElement.textContent = "Incorrect password. Please try again.";
        
// //     } else {
// //         // User not found/Invalid Credentials
// //         messageElement.classList.add('message-error');
// //         messageElement.textContent = "We could not find an account with that email address.";
// //     }
// // }


// // // --- Forgot Password / State Switching ---

// // function showForgotPassword() {
// //     document.getElementById('loginBox').classList.add('hidden');
// //     document.getElementById('forgotPasswordBox').classList.remove('hidden');
// // }

// // function showLogin() {
// //     document.getElementById('forgotPasswordBox').classList.add('hidden');
// //     document.getElementById('loginBox').classList.remove('hidden');
// //     // Clear any messages when switching back
// //     document.getElementById('loginMessage').textContent = "";
// // }

// // function handleReset(event) {
// //     event.preventDefault();

// //     const resetEmail = document.getElementById('resetEmail').value;
// //     const messageElement = document.getElementById('resetMessage');
    
// //     messageElement.textContent = "";
// //     messageElement.className = "login-message";

// //     if (resetEmail) {
// //         // --- Password Reset Simulation (Backend required for actual email sending) ---
// //         messageElement.classList.add('message-success');
// //         messageElement.textContent = `If ${resetEmail} is associated with an account, a password reset link has been sent.`;
        
// //         // Optional: Auto-redirect back to login after a delay
// //         setTimeout(() => {
// //             showLogin();
// //         }, 5000);

// //     } else {
// //         messageElement.classList.add('message-error');
// //         messageElement.textContent = "Please enter a valid email address.";
// //     }
// // }


// // // --- Other Features (Affiliate, Google, Create Account) ---

// // function switchLoginType(type) {
// //     const button = document.querySelector('.continue-btn');
// //     const switchLink = document.querySelector('.login-switch a');
    
// //     if (type === 'Affiliate') {
// //         button.textContent = "Continue (Affiliate Login)";
// //         switchLink.textContent = "Vendor Login";
// //         switchLink.setAttribute('onclick', "switchLoginType('Vendor')");
// //         document.getElementById('loginBox').querySelector('h1').textContent = "Affiliate Sign-in";
// //         alert("Switched to Affiliate Login! (Logic will change in the backend)");

// //     } else {
// //         button.textContent = "Continue (Vendor Login)";
// //         switchLink.textContent = "Affiliate Login";
// //         switchLink.setAttribute('onclick', "switchLoginType('Affiliate')");
// //         document.getElementById('loginBox').querySelector('h1').textContent = "Sign-in";
// //         alert("Switched to Vendor Login!");
// //     }
// // }

// // function googleLogin() {
// //     alert("Initiating Google Login... (Requires Google API Integration)");
// //     // In a real application, this opens a Google sign-in popup
// // }

// // function createAccount(type) {
// //     alert(`Redirecting to Create ${type} Account Page... (Requires Registration Form Page)`);
// //     // In a real application, this redirects to the /register page
// // }


  
//     function login() {
//       const email = document.getElementById('email').value;
//       const password = document.getElementById('password').value;
//       const errorMsg = document.getElementById('errorMsg');
      
//       // Dummy credentials (you can change)
//       const validEmail = "admin@gmail.com";
//       const validPassword = "12345";

//       if (email === validEmail && password === validPassword) {
//         document.getElementById('loginPage').classList.add('hidden');
//         document.getElementById('dashboard').classList.remove('hidden');
//       } else {
//         errorMsg.classList.remove('hidden');
//       }
//     }

//     function logout() {
//       document.getElementById('dashboard').classList.add('hidden');
//       document.getElementById('loginPage').classList.remove('hidden');
//       document.getElementById('email').value = '';
//       document.getElementById('password').value = '';
//       document.getElementById('errorMsg').classList.add('hidden');
//     }