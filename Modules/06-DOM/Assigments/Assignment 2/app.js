const palette = document.querySelector(".palette");
const searchInput = document.querySelector(".search-input");

let keyPressed = {};

window.addEventListener("keydown", showCommandPalette);

window.addEventListener("keyup", (event) => {
  if (!event.repeat) {
    delete keyPressed[event.key];
  }
});

searchInput.addEventListener("keydown", searchPeople);
searchInput.addEventListener("keydown", clearSearchInput);

function showCommandPalette(event) {
  // prevent the default ctrl + K event action to be handled (again, on top of my own event function)
  event.preventDefault();
    
  // add key pressed to keyPressed obj, with value of true
  keyPressed[event.key] = true;
  if (keyPressed["Control"] && keyPressed["k"]) {
    palette.classList.toggle("fade-out");
    palette.classList.toggle("fade-in");
  }
}


let userInput = "";
function searchPeople(event) {
  if (event.key.length === 1) {
    userInput += event.key;
  }
  if (event.key === "Backspace") {
    userInput = userInput.substring(0, userInput.length - 1);
  }
  event.target.value = userInput;
}

function clearSearchInput(event) {
  if (event.key == "Enter") {
    userInput = "";
    event.target.value = "";
  }
}
