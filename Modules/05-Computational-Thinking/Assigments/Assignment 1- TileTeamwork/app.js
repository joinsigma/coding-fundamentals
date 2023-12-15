const arrayDice = [1, 2, 3, 4, 5, 6];

function possibleBonus(a, b) {
    if (a < 0 || b < 0) return "Please enter a valid number";

    isEqual = arrayDice.some(el => el + a === b);

    return isEqual
}

console.log(possibleBonus(3, 7));
console.log(possibleBonus(1, 9));
console.log(possibleBonus(5, 3));