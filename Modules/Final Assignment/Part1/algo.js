//1. Reverse A String Using Loops.
function reverse(arr){
    console.log(arr.split('').reverse().join(''))
}

reverse('Greetings from The Hacker Collective')

//2. Same Back And Forth - Is a string the same backwards 
// and forwards? Return true if it is, false if it is not.
var isSame = true
function sameBackAndForth(str){
    for (let i = 0; i <= Math.floor(str.length / 2) - 1; i ++){
        if( str[i] !== str[str.length - i - 1]){
            isSame = false
            break
        }  
    }
    console.log(isSame)

}

sameBackAndForth('abcdefg')

//3. Given an integer, return an integer that is the reverse ordering of numbers.
function reverseInt(int){
    var new_int = parseFloat(int.toString().split('').reverse().join('')) * Math.sign(int)  
    console.log(new_int)
}

reverseInt(-829318)

//4. SumArr - Find the sum of all items in an array, using loops.
function sumArr(arr){
console.log(arr.reduce((previousValue, currentValue) => previousValue + currentValue, 0))
}

sumArr([1000,2000,44,55,22])

//5. SumArr - Find the sum of all items in an array, using loops.
function  deafGrandma(str){
    console.log(str.toUpperCase().split(' ').join('!!').concat('!!'))

}

deafGrandma('I have a bad feeling about this')

//6. What Is Missing - Find the missing letter in the passed letter range and return it. 
//If all letters are present in the range, return undefined.
function whatIsMissing(str){
    for(let i = 1; str.length; i++){
        if ((str.charCodeAt(i) - str.charCodeAt(i-1)) > 1){
            console.log(String.fromCharCode(str.charCodeAt(i-1)+1))
        } else return undefined
    }
}

whatIsMissing('abcdefghijklmnopqrstuvwxyz')

//7. Do a swap on the sentence using the arguments provided and return the new sentence.
function swap(sentence, str1, str2){
    let string = sentence.split(' ')
    let new_str2 = ''

    if (str1[0].toUpperCase())
        new_str2 = str2[0].toUpperCase()+str2.slice(1)

    for (let word of string){
        if(word === str1){
            sentence = sentence.replace(str1, new_str2)
        }
    }

    console.log(sentence)
 
}

swap("Let us get back to more Coding", "Coding", "algorithms")