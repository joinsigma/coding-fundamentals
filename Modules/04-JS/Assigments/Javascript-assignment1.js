function sum(numbersArray){  
    // your code
    let acc = 0
    for (let number of numbersArray){
        acc += number
    }

    return acc
}

// Test cases
console.log(sum([1, 2, 3, 4]) === 10)
console.log(sum([-3, 5, 19, -6]) === 15)