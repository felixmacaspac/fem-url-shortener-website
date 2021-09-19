"use strict";
var hamburger = document.getElementById("toggle-button"),
    navMenu = document.getElementById("nav-container");
hamburger.addEventListener("click", (function(e) {
    hamburger.classList.toggle("is_active"), navMenu.classList.toggle("is_active")
}));
//# sourceMappingURL=index.js.map