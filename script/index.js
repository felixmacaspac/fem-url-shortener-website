// Toggle navbar

const hamburger = document.getElementById("toggle-button");
const navMenu = document.getElementById("nav-container");

hamburger.addEventListener("click", (mobileMenu) => {
  hamburger.classList.toggle("is_active");
  navMenu.classList.toggle("is_active");
});

// shorten form
// https://api.shrtco.de/v2/shorten?url=${url}

// #.1 get all the HTML elements
const shortenForm = document.getElementById("shorten-form");
const btnForm = document.getElementById("btn-form");
const inputForm = document.getElementById("input-form");
const shortenOutput = document.getElementById("shorten-output");
const errorMessage = document.querySelector(".shorten__error");
const shortenApi = `https://api.shrtco.de/v2/shorten?url=${inputForm}`;

// #.2 fetch the API
async function callAPi() {
  fetch(shortenApi)
    .then((response) => response.json())
    .then((data) => console.log(data));
}
callAPi();
// #.3 work with the button and console log whenever you click it will fetch the API
