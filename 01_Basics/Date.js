const date = Date.now();
// console.log(date);
const mydate = new Date();
// console.log(mydate.toString()); //Fri Feb 28 2025 15:19:01 GMT+0000 (Coordinated Universal Time)
// console.log(mydate.getDate());

let customDate = new Date(27,1,2025)
let customDate2 = new Date("01-14-2025");
// console.log(customDate.toDateString()); // Wed Aug 17 1932/
// console.log(customDate2.getFullYear()); // 2025
// console.log(customDate2.getDate()); // 14
// console.log(customDate2.getDay()); // 2
// console.log(mydate.getHours()); // 16
// console.log(mydate.getMinutes()); // 37
// console.log(mydate.getTime());  //1740849654855
// console.log(mydate.getMilliseconds()); //857
// console.log(mydate.getDate()); // 2 this means Mar 
// console.log(customDate.getTime());



// console.log(mydate.getTime());
// Standard date-time string format
// const unixTimeZero = Date.parse("1970-01-01T00:00:00Z"); // Non-standard format resembling toUTCString()
// const javaScriptRelease = Date.parse("04 Dec 1995 00:12:00 GMT");

// console.log(unixTimeZero); // Expected output: 0

// console.log(javaScriptRelease); // Expected output: 818035920000

const launchDate = new Date("July 1, 1999, 12:00:00");
const futureDate = new Date();
futureDate.setTime(launchDate.getTime());

// console.log(futureDate.toUTCString());
// Expected output: "Thu Jul 01 1999 12:00:00 GMT+0200 (CEST)"

const fiveMinutesInMillis = 5 * 60 * 1000;
futureDate.setTime(futureDate.getTime() + fiveMinutesInMillis);

// console.log(futureDate.toUTCString());

// console.log(futureDate);

const newdate = new  Date();
const justdate = newdate.toLocaleString('default',{
    weekday:'long',
})
console.log(justdate);
let mytimeStamp = Date.now();
