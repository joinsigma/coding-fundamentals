// import randomWords from "./node_modules/random-words";
//var randomWords = require('random-words');

const word__box = document.querySelector(".word__box");
const letter__box = document.querySelector(".letter__box");
const win = document.querySelector(".win");
const lose = document.querySelector(".lose");
const replay = document.querySelector("#replay");
const next = document.querySelector("#next");

var chances__left = document.querySelector(".chances__left");
URL = "https://random-words-api.vercel.app/word";
// URL = "https://random-word-api.herokuapp.com/word"

//chance
var chance = 15;

//fetch API, get the word
fetch(URL)
.then(response=> response.json())
.then(data => {
    var word = data[0].word.toLowerCase()
    console.log(word)
    getWord(word)
})
.catch((error) => console.log(error))

// async function getWord() {
//   const response = await fetch(URL);
//   const data = await response.json();
//   var word = data[0].word.toLowerCase();
//   console.log(word)

//   return word;
// }

//alphabet array to select letters
var alphabetArray = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

//for each element, create span node, set the node id and class
//for each span node, create a text node
//Node and children
//-----------------
//letter__box (found in index.html)
//  span
//    letter
alphabetArray.map((letter) => {
  var node = document.createElement("span");
  node.setAttribute("class", "alphabet");
  node.setAttribute("id", letter);
  var letterNode = document.createTextNode(letter);
  node.appendChild(letterNode);
  letter__box.appendChild(node);
});

function captureWords(data) {
  var word = data;
  if (word.length <= 3) {
    var min = 1;
    var max = word.length;
    var index1 = Math.floor(Math.random() * (max - min)) + min;
  } else if (word.length <= 5) {
    var min = 1;
    var max = word.length;
    var index1 = Math.floor(Math.random() * (max - min)) + min;
    var index2 = Math.floor(Math.random() * (max - min)) + min;
  } else if (word.length <= 7) {
    var min = 1;
    var max = word.length;
    var index1 = Math.floor(Math.random() * (max - min)) + min;
    var index2 = Math.floor(Math.random() * (max - min)) + min;
    var index3 = Math.floor(Math.random() * (max - min)) + min;
  } else if (word.length <= 15) {
    var min = 1;
    var max = word.length;
    var index1 = Math.floor(Math.random() * (max - min)) + min;
    var index2 = Math.floor(Math.random() * (max - min)) + min;
    var index3 = Math.floor(Math.random() * (max - min)) + min;
    var index4 = Math.floor(Math.random() * (max - min)) + min;
  }

  //null the random number position value of the variable
  // underscore for the variable
  var guess = word;
  guess = guess.split("");
  if (word.length <= 3) {
    guess[index1 - 1] = "_";
  } else if (word.length <= 5) {
    guess[index1 - 1] = "_";
    guess[index2 - 1] = "_";
  } else if (word.length <= 7) {
    guess[index1 - 1] = "_";
    guess[index2 - 1] = "_";
    guess[index3 - 1] = "_";
  } else if (word.length <= 15) {
    guess[index1 - 1] = "_";
    guess[index2 - 1] = "_";
    guess[index3 - 1] = "_";
    guess[index4 - 1] = "_";
  }

  word__box.innerHTML = guess.join("");
  return guess.join("");
}

//Event listener for selecting letter
alphabet = document.querySelectorAll(".alphabet");

//function for correct letter
function correct(word, guess, selectedLetter) {
  isUnderscore = false;
  word = word.split("");
  guess = guess.split("");
  console.log("word: " + word);

  for (let i = 0; i < word.length; i++) {
    if (word[i] === selectedLetter) {
      guess[i] = word[i];
    }
  }

  if (guess.filter((element) => element === "_").length === 0) {
    win.classList.add("view");
    localStorage.setItem("chance", JSON.stringify(chances__left.innerHTML));
    next.addEventListener("click", () => {
      window.location.reload();
    });
  }

  return guess.join("");
}

//if wrong, minus chance
function wrong() {
  chance -= 1;
  chances__left.innerHTML = chance;
  localStorage.setItem("chance", JSON.stringify(chances__left.innerHTML));

  if (chance === 0) {
    lose.classList.add("view");

    replay.addEventListener("click", () => {
      localStorage.removeItem("chance");
      window.location.reload();
    });
  }
}

//save the chance to local storage
function storage() {
  var reference = localStorage.getItem("chance");

  if (reference) {
    chance = JSON.parse(reference);
    chances__left.innerHTML = chance;
  }
}

// main function
// (async function () {
//   var word = await getWord();
//   var guess = captureWords(word);
//   var selectedLetter = alphabet.forEach((each) => {
//     each.addEventListener("click", selectLetter);
//   });
//   storage();

//   function selectLetter(event) {
//     var selectedLetter = event.target.innerText; //return innertext of alphabet
//     var isLetterMatched = word.includes(selectedLetter);

//     //if the letter is clicked, make it disabled and red
//     var isLetterClicked = alphabetArray.includes(selectedLetter);
//     if (isLetterClicked) {
//       document.getElementById(selectedLetter).classList.add(".clicked");
//     }
//     if (isLetterMatched) {
//       guess = correct(word, guess, selectedLetter);
//       word__box.innerHTML = guess;
//     } else if (!isLetterMatched) {
//       wrong();
//     }
//   }
// })();


//another main function
function getWord(word){
  var word = word
  var guess = captureWords(word);
  var selectedLetter = alphabet.forEach((each) => {
    each.addEventListener("click", selectLetter);
  });
  storage();

  function selectLetter(event) {
    var selectedLetter = event.target.innerText; //return innertext of alphabet
    var isLetterMatched = word.includes(selectedLetter);

    //if the letter is clicked, make it disabled and red
    var isLetterClicked = alphabetArray.includes(selectedLetter);
    if (isLetterClicked) {
      document.getElementById(selectedLetter).classList.add(".clicked");
    }
    if (isLetterMatched) {
      guess = correct(word, guess, selectedLetter);
      word__box.innerHTML = guess;
    } else if (!isLetterMatched) {
      wrong();
    }
  }
}