// Capstone Project: How Many Days Between Two Dates

function getDays(date1, date2) {
  let date1InMs = Date.parse(date1);
  let date2InMs = Date.parse(date2);

  const oneDayInMs = 24 * 60 * 60 * 1000;

  if (date2InMs > date1InMs) {
    let diffInMs = date2InMs - date1InMs;
    let noOfdays = diffInMs/oneDayInMs;
    return noOfdays;
  }
}

console.log(getDays(new Date("June 14, 2019"),new Date("June 20, 2019")));
getDays(new Date("December 29, 2018"),new Date("January 1, 2019"));
getDays(new Date("July 20, 2019"),new Date("July 30, 2019"));