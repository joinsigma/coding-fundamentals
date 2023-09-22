const array = [];

function missingLetter(str) {  
    for (let i = 1; i < str.length; i++){
        previousLetter = str.charCodeAt(i - 1); //Gets the character code value of the previous letter
        currentLetter = str.charCodeAt(i); //Gets the character code value of the current letter
        if (currentLetter - previousLetter > 1) {
            missLetter = String.fromCharCode(previousLetter + 1); //Gets the missing letter using the character code value 
            return missLetter
        }        
    }
}
  
console.log(missingLetter("abce")); //Expected output: d
console.log(missingLetter("abcdefghjklmno"));
console.log(missingLetter("stvwx"));
console.log(missingLetter("bcdf"));
console.log(missingLetter("abcdefghijklmnopqrstuvwxyz"));