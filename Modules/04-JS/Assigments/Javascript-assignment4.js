function tetra(n){  
    // your code
    let total = ( n * (n + 1) * ( n + 2 )) / 6

    return total
}

console.log(tetra(2) === 4)
console.log(tetra(5) === 35)
console.log(tetra(6) === 56)