function getDays(x, y) {
    date1 = new Date(x);
    date2 = new Date(y);
    if (date2 < date1) {
        differenceMilli = date1 - date2
    } else {
        differenceMilli = date2 - date1;
    }

    differenceDays = differenceMilli/(1000 * 60 * 60 * 24);

    return differenceDays
}

console.log(getDays("6/14/2019", "6/20/2019"));
console.log(getDays("12/29/2018", "1/1/2019"));
console.log(getDays("7/20/2019", "7/30/2019"));