// Toggle navbar

const hamburger = document.getElementById("toggle-button");
const navMenu = document.getElementById("nav-container");

hamburger.addEventListener("click", (mobileMenu) => {
  hamburger.classList.toggle("is_active");
  navMenu.classList.toggle("is_active");
});
