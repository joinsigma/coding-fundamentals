// const register = document.querySelector(".register");

const close = document.querySelector(".close-button");
const panel = document.querySelector(".slide-over-panel");

// add the register button in JS
const register = document.createElement("button");
register.textContent = "Register";
register.classList.add("register");
const nextSibling = document.querySelector(".slide-over-container");
nextSibling.parentNode.insertBefore(register, nextSibling);
// add css of register in JS 
register.style.cssText = "position: relative;z-index: 10;"
// hide the panel as default status in JS
panel.classList.add("slide-out");

// add event listener to register button in JS
register.addEventListener("click", slideInPanel);
close.addEventListener("click", slideOutPanel);

function slideInPanel() {
  panel.classList.toggle("slide-out");
  panel.classList.toggle("slide-in");
}

function slideOutPanel() {
  panel.classList.toggle("slide-in");
  panel.classList.toggle("slide-out");
}
