function factorial(anyNumber){
    let array = [];
    let result = 1;

    for (let i = anyNumber; i >= 1; i--) {
        array.push(i);
    }

    for (let numbers of array) {
        result *= numbers
    }

    return result
}

console.log(factorial(5) === 120)
console.log(factorial(4) === 24)
console.log(factorial(1) === 1)