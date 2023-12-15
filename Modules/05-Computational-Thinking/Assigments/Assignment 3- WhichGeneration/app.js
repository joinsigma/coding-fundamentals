const male = [
  { number: -3, generation: "great grandfather" },
  { number: -2, generation: "grandfather" },
  { number: -1, generation: "father" },
  { number: 0, generation: "me!" },
  { number: 1, generation: "son" },
  { number: 2, generation: "grandson" },
  { number: 3, generation: "great grandson" },
];

const female = [
  { number: -3, generation: "great grandmother" },
  { number: -2, generation: "grandmother" },
  { number: -1, generation: "mother" },
  { number: 0, generation: "me!" },
  { number: 1, generation: "daughter" },
  { number: 2, generation: "granddaughter" },
  { number: 3, generation: "great granddaughter" },
];

function generation(x, y) {
  try {
    if (y === "m") {
      matchedGeneration = male.find((el) => x === el.number).generation;
      return matchedGeneration;
    } else if (y === "f") {
      matchedGeneration = female.find((el) => x === el.number).generation;
      return matchedGeneration;
    } else {
      return "Invalid entry";
    }
  } catch (error) {
    return "Invalid entry";
  }
}

console.log(generation(2, "f"));
console.log(generation(-3, "m"));
console.log(generation(1, "f"));
