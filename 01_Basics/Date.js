const date = Date.now();
// console.log(date);
const mydate = new Date();
// console.log(mydate.toString()); //Fri Feb 28 2025 15:19:01 GMT+0000 (Coordinated Universal Time)
// console.log(mydate.getDate());

let customDate = new Date(27,1,2025)
let customDate2 = new Date("01-14-2025");
// console.log(customDate.toDateString()); // Wed Aug 17 1932/
console.log(customDate2.getFullYear()); // 2025
// console.log(customDate.getTime()); 

// console.log(mydate.getTime());