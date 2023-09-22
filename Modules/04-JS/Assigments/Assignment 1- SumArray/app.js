function sum(numbersArray) {
  let result = 0;
  for (let integer of numbersArray) {
    result += integer;
  }

  return result;
}

// Test cases
console.log(sum([1, 2, 3, 4]) === 10);
console.log(sum([-3, 5, 19, -6]) === 15);
