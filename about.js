// Example: Button Click Action
document.addEventListener("DOMContentLoaded", () => {
  const careerBtn = document.getElementById("careerBtn");
  careerBtn.addEventListener("click", (e) => {
    e.preventDefault();
    alert("Career opportunities coming soon!");
  });
});

const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navLinks.classList.toggle("active");
});

