// 1. Reverse a string using loops

function reverse(inputStr) {
  let outcome = inputStr.charAt(inputStr.length - 1);
  for(let i=inputStr.length - 2; i>=0; i--) {
    outcome += inputStr.charAt(i);
  }
  return outcome;
}

reverse('abcde') // == 'edcba'
reverse('hello') // == 'olleh'
reverse('Greetings from The Hacker Collective') // == 'evitcelloC rekcaH ehT morf sgniteerG'

// 2. Same Back And Forth - Is a string the same backwards and forwards? Return true if it is, false if it is not.

function sameBackAndForth(inputStr) {
  const reverseInputStr = reverse(inputStr);
  return reverseInputStr === inputStr;
}

sameBackAndForth("abba") // === true
sameBackAndForth("abcdefg") // === false

// 3. Given an integer, return an integer that is the reverse ordering of numbers.

function reverseInt(num) {
  let integer = num;
  if(num < 0) {
    integer = Math.abs(num);
  }
  const numStr = integer.toString();
  const numStrReverse = reverse(numStr);
  return num < 0 ? Number(numStrReverse) * -1 : Number(numStrReverse);
}

reverseInt(15) // === 51
reverseInt(981) // === 189
reverseInt(500) // === 5
reverseInt(-15) // === -51
reverseInt(-90) // === -9

// 4. SumArr - Find the sum of all items in an array, using loops. 

function sumArr(arr) {
  let sum = 0;
  arr.forEach( (elem) => sum += elem );
  return sum;
}

sumArr([1,2,3,4,5]) // == 15
sumArr([1000,2000,44,55,22]) // == 3121
sumArr([123,456,789]) // == 1368

// 5. Angry Grandma - You will write a function that takes in a String. The function should return a new sentence where every word is yelled. A yelled word is when each word is all uppercase followed by 2 exclamation marks (!!)

function deafGrandma(inputSentence) {
  const words = inputSentence.split(" ");
  let yelledSentence = "";
  words.forEach( (word) => {
    yelledSentence += word.toUpperCase() + "!!" + " ";
  });
  return yelledSentence.trim();
}

deafGrandma("I have a bad feeling about this") // == "I!! HAVE!! A!! BAD!! FEELING!! ABOUT!! THIS!!"

// 6. What Is Missing - Find the missing letter in the passed letter range and return it. If all letters are present in the range, return undefined.

function whatIsMissing(inputStr) {
  const alphabets = "abcdefghijklmnopqrstuvwxyz";
  const firstLetterIndex = alphabets.indexOf(inputStr[0]);
  const lastLetterIndex = alphabets.indexOf(inputStr[inputStr.length - 1]);
  const range = alphabets.substring(firstLetterIndex, lastLetterIndex + 1);
  let missingLetter;
  if (range.length === inputStr.length) {
    return missingLetter;
  } else {
    for(let i=0; i<range.length; i++) {
      if(range[i] != inputStr[i]) {
        missingLetter = range[i];
        return missingLetter;
      }
    }
  }
}

whatIsMissing("abcdefghijklmnopqrstuvwxyz")// == undefined
whatIsMissing("bcdf") // == 'e'
whatIsMissing("abcdefghjklmno") // == 'i'

// 7. Do a swap on the sentence using the arguments provided and return the new sentence.

function swap(inputStr, wordBefore, wordAfter) {
  const words = inputStr.split(" ");
  let wordBeforeIndex;
  words.forEach( (word, index) => {
    if(wordBefore === word) {
      wordBeforeIndex = index;
    }
  });
  let newWord = wordAfter;
  // if first letter is capitalise
  if (wordBefore.charAt(0) === wordBefore.charAt(0).toUpperCase()) {
    const newWordFirstLetter = wordAfter.charAt(0).toUpperCase();
    newWord = newWordFirstLetter + wordAfter.substring(1, wordAfter.length);
  }
  words.splice(wordBeforeIndex, 1, newWord);
  return words.join(" ");
}

swap("His name is Tom", "Tom", "john") // == "His name is John".
swap("Let us get back to more Coding", "Coding", "algorithms") // == "Let us get back to more Algorithms".
swap("This has a spellngi error", "spellngi", "spelling") // == "This has a spelling error".