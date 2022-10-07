function missingLetter(str) {  

    //split the string into a single array with characters
    const character = str.split('')

    //get ASCII code for each alphabet
    const codeValue = character.map(x => x.charCodeAt(0))

    //determine the difference of in-between code value 
    let arrayLength = codeValue.length
    let lowerDifferenceInValue = Infinity
    let finalDifferenceValue = 0

    for (let i = 1; i < arrayLength; i ++){
        differenceInValue = codeValue[i] - codeValue[i-1] 
        
        while (arrayLength--) {
            if (differenceInValue < lowerDifferenceInValue) {
                lowerDifferenceInValue = differenceInValue;
            }
        }
    }  
    
    finalDifferenceValue = lowerDifferenceInValue
        
    //check if the in between value is same?
    //yes, then continue
    //no, then get the correct code value by adding difference value into the [current value]
    let missingCode = 0

    for (let i = 0; i < codeValue.length - 1; i ++){

        if ((codeValue[i] + finalDifferenceValue) !== codeValue[i+1]){
                missingCode = codeValue[i] + finalDifferenceValue
        }
    }

    //convert the code into character
    var str = String.fromCharCode(missingCode)

    //check if there is missing character
    //if yes, return the missed character
    //if no, return undefined
    if (missingCode !== 0){
        console.log(str)
        return str
    } else if (missingCode === 0){
        var str = String.fromCharCode(117, 110, 100, 101, 102, 105, 110, 101, 100)
        //return str
        console.log(str)
    }

  }
  
missingLetter("abce")

missingLetter("abcdefghjklmno") //should return the string i.

missingLetter("stvwx") //should return the string u.

missingLetter("bcdf") //should return the string e.

missingLetter("abcdefghijklmnopqrstuvwxyz") //should return undefined.

