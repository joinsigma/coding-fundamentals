// Assignmnet 1

function sum(arr) {
  const result = arr.reduce( (acc, num) => acc + num, 0);
  return result;
}

sum([1,2,3,4,5]);
sum([1,2,3,4,-5]);

// Assignment 2

function calculateAge(dob) {
  const todayDate = new Date();
  const todayYear = todayDate.getFullYear();
  const todayMth = todayDate.getMonth();
  const todayDay = todayDate.getDate();
  const dobResult = dob.split("/");
  const dd = dobResult[0];
  const mm = dobResult[1] - 1;
  const yyyy = dobResult[2] ;

  let age;
  if (yyyy < todayYear) {
    if (mm < todayMth) {
      age = todayYear - yyyy;
    } else if (mm > todayMth){
      age = todayYear - yyyy - 1;
    } else if (mm == todayMth) {
      if (dd < todayDay) {
        age = todayYear - yyyy;
      } else if (dd >= todayDay) {
        age = todayYear - yyyy - 1;
      }
    }
  }
  return age;
}

// Assignment 3

function factorial(n) {
  if (n===0 || n===1) return 1;
  let result = 1;
  for (let i=n; i>=1; i--) {
    result *= i;
  }
  return result;
}

// Assignment 4

// Tetrahedral numbers : 0, 1, 4, 10, 20, 35, 56, 84, 120, 165, 220, 286, 364, 455, 560, 680, 816, 969, 1140, 1330, 1540, 1771, 2024, 2300, 2600, 2925, 3276, ...
function tetra(n) {
  return ((n*(n+1)*(n+2))/6);
}
