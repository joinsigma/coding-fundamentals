// Capstone

function missingLetter(str) {
  const alphabets = "abcdefghijklmnopqrstuvwxyz";
  let res = undefined;

  const firstLetter = str.charAt(0);
  const lastLetter = str.charAt(str.length - 1);

  const startRange = alphabets.indexOf(firstLetter);
  const endRange = alphabets.indexOf(lastLetter);
  const subStr = alphabets.substring(startRange, endRange + 1);

  // if there are missing letters in str
  if (!subStr.includes(str)) {
    const range = subStr.split("");
    const result = range.filter( (letter) => !str.includes(letter));
    res = result.join();
  }
  return res;
}