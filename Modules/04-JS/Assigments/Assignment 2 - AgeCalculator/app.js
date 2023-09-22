function calculateAge(date) {
    const currentDate = new Date(); // Gets the current date
    const birthDate = new Date(date); // Gets the person's actual birthdate
    const ageInMillis = currentDate - birthDate; //Gets the time difference in milliseconds
    const ageInYears = ageInMillis / (1000 * 60 * 60 * 24 * 365.25); // Taking leap years into account
    const roundedAge = Math.floor(ageInYears);

    return roundedAge
}

console.log(calculateAge("9/18/2010") === 13)
console.log(calculateAge("11/17/1979") === 43)