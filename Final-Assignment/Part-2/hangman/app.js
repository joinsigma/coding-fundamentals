import fetch from "node-fetch";
import myKey from "./config.js";
import promptSync from "prompt-sync";
const prompt = promptSync();

let wordDisplay = "";
let wrongCount = 0;

const type = ["noun", "verb", "adjective", "adverb"];
const randomIndex = Math.floor(Math.random() * type.length);

// type (optional): noun, verb, adjective, adverb.
const url = `https://random-word-by-api-ninjas.p.rapidapi.com/v1/randomword?type=${type[randomIndex]}`;
const options = {
  method: 'GET',
  headers: {
    "Content-Type": "application/json",
    'X-RapidAPI-Key': myKey,
    'X-RapidAPI-Host': 'random-word-by-api-ninjas.p.rapidapi.com'
  }
};

async function getWord() {
  try {
    const response = await fetch(url, options);
    const result = await response.json();
    return result.word;
  } catch (error) {
    console.error(error);
  }
}

let secretWord = await getWord();
console.log("random word", secretWord);
let numOfTries = secretWord.length;

function displayHangman(count) {
  switch (count) {
    case 1:
      console.log(" | ");
      console.log(" | ");
      console.log(" | ");
      console.log(" /\\");
      break;
    case 2:
      console.log(" -----");
      console.log(" |  ");
      console.log(" | ");
      console.log(" | ");
      console.log(" | ");
      console.log(" | ");
      console.log(" /\\");
      break;
    case 3:
      console.log(" ----------");
      console.log(" |        |");
      console.log(" | ");
      console.log(" | ");
      console.log(" | ");
      console.log(" | ");
      console.log(" /\\");
      break;
    case 4:
      console.log(" ----------");
      console.log(" |        |");
      console.log(" |        O");
      console.log(" |       / \\");
      console.log(" | ");
      console.log(" | ");
      console.log(" /\\");
      break;
    case 5:
      console.log(" ----------");
      console.log(" |        |");
      console.log(" |        O");
      console.log(" |       / \\");
      console.log(" |        |");
      console.log(" |       / \\");
      console.log(" /\\");
      break;
    default: 
      console.log("");
      break;
  }
}

function run() {
  // if secret word is undefined, return nth
  if (!secretWord) return;
  let wordToBeGuessed = secretWord.toLowerCase();
  console.log("word",wordToBeGuessed);

  let result = [];

  for (let i=0; i<wordToBeGuessed.length; i++) {
    result.push("_");
    // wordDisplay += "_";
  }

  wordDisplay = result.join(" ");

  do {
    console.log("\n");
    console.log("Word: " + wordDisplay);
    console.log("\n");
    displayHangman(wrongCount);
    console.log("\n");
    console.log("Number of tries left: " + numOfTries);
    console.log("\n");
    const userGuess = prompt("Enter your guess: ").toLowerCase();
    if(userGuess.length < 1) return;
    if(wordToBeGuessed.includes(userGuess[0])) {
      for (let i=0; i<wordToBeGuessed.length; i++) {
        if(wordToBeGuessed[i] === userGuess[0]) {
          result.splice(i, 1, userGuess[0]);
        }
      }
      wordDisplay = result.join(" ");
      numOfTries--;
      if(result.join("") === wordToBeGuessed) {
        console.log(`You guessed it! The word is ${wordToBeGuessed}`);
        break;
      }
    } else {
      wrongCount++;
      numOfTries--;
      console.log(`Hint: The word is a/an ${type[randomIndex]}`);
    }
  } while (numOfTries > 0)

  if (numOfTries < 1) {
    console.log(`You lose! Better luck next time! The word is ${wordToBeGuessed}`);
  }
}

run();