function calculateAge(date) {
    // your code
    let today = "4/6/2022"
    today = new Date(today.split('/')[2],today.split('/')[1]-1,today.split('/')[0])
    console.log(today)
    date = new Date(date.split('/')[2],date.split('/')[1]-1,date.split('/')[0])
    console.log(date)

    let ageInMili = Math.abs(today.getTime() - date.getTime())
    let age = Math.floor(ageInMili / 1000 / 3600/ 24 / 365)
    return age

}
console.log(calculateAge("20/7/2002") === 19)
console.log(calculateAge("1/1/1979") === 43)
