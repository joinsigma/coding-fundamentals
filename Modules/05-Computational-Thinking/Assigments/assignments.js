// Assignment 1: Tile Teamwork Tactics
function possibleBonus(posA, posB) {
  const diff = posB - posA;
  if (diff <= 6 && diff > 0) {
    return true;
  } else return false;
}

// console.log(possibleBonus(3, 7));
// console.log(possibleBonus(1, 9));
// console.log(possibleBonus(5, 3));

// Assignment 2: Perimeters with a catch
function perimeter(letter, num) {
  return (letter === "s" ? 4 * num : 6.28 * num);
}

// console.log(perimeter("s", 7));
// console.log(perimeter("c", 4));
// console.log(perimeter("c", 9));

// Assignment 3: Which Generation Are You?
function generation(num, gender) {
 switch(num){
  case -3:
    return gender === "m" ? "great grandfather" : "great grandmother";
    break;
  case -2:
    return gender === "m" ? "grandfather" : "grandmother";
    break;
  case -1:
    return gender === "m" ? "father" : "mother";
    break;
  case 1:
    return gender === "m" ? "son" : "daughter";
    break;
  case 2:
    return gender === "m" ? "grandson" : "grandaughter";
    break;
  case 3:
    return gender === "m" ? "great grandson" : "great grandaughter";
    break;
 default:
    return "me!";
 }
}

// console.log(generation(2, "f"));
// console.log(generation(-3, "m"));
// console.log(generation(1, "f"));
// console.log(generation(0, "f"));
// console.log(generation(0, "m"));