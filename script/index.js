// Toggle navbar

const hamburger = document.getElementById("toggle-button");
const navMenu = document.getElementById("nav-container");

hamburger.addEventListener("click", (mobileMenu) => {
  hamburger.classList.toggle("is_active");
  navMenu.classList.toggle("is_active");
});

// JS selectors
const shortenForm = document.getElementById("shorten-form");
const btnForm = document.getElementById("btn-form");
const inputForm = document.querySelector(".shorten-form__input");
const shortenOutput = document.getElementById("shorten-output");
const errorMessage = document.querySelector(".shorten__error");

// array
let linksArray = [];

// event listeners

shortenForm.addEventListener("click", shortenLink);

function shortenLink(e) {
  e.preventDefault();
  let inputValue = inputForm.value;

  if (inputValue === "") {
    errorMessage.classList.add("is_null")
    inputForm.classList.add("is_null")

  } else {
    errorMessage.classList.remove("is_null")
    inputForm.classList.remove("is_null")

      fetch(`https://api.shrtco.de/v2/shorten?url=${inputValue}`)
      .then(response => response.json())
      .then(data => {
        
          let linkObj = {
              originalLink: data.result.original_link,
              shortenedLink: data.result.full_short_link2
          }
        
          linksArray.unshift(linkObj);
          shortenOutput.innerHTML = '';

          linksArray.forEach( inputForm => {
              let linkHtmlString = `
              <div class="copied">
                <div class="container">
                  <div class="copied__content">
                    <div class="copied__wrapper">
                      <div class="copied__link --original">
                        <p>${inputForm.originalLink}</p>
                      </div>
                      <div class="copied__link --shorten">
                        <p>${inputForm.shortenedLink}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          `;
            shortenOutput.innerHTML += linkHtmlString;
          })
      })
  }
  inputForm.value = '';
}