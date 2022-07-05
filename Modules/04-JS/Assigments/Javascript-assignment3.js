function factorial(anyNumber){  
    // your code
    let multiplication = 1
    for (let i = 1; i <= anyNumber;  i++){
        multiplication *= i
    }

    return multiplication
}

console.log(factorial(5) === 120)
console.log(factorial(4) === 24)
console.log(factorial(1) === 1)