//Number Conversion In javascript 

let score = "33abc";
let ValidateScore = Number(score)
console.log(typeof ValidateScore); //number
console.log(ValidateScore);     //NaN

let Rank =null;
let ValidateScore2 = Number(Rank) 
console.log(typeof ValidateScore2);  //number
console.log( ValidateScore);  //  0
console.log(Rank);  //null
console.log(typeof Rank);  //object

let Rank2 =undefined;
console.log( Rank2);  //Undefined
console.log(typeof Rank2); //Undefined

let Rank3 =0;
console.log( Rank3);  // 0
console.log(typeof Rank3); // Number


// Boolean Conversion

let IsvalidAge = 1;
let IsReallyValid = Boolean(IsvalidAge)
console.log(IsvalidAge); // 1
console.log(IsReallyValid); // True


// let IsvalidAge = 0;
// let IsReallyValid = Boolean(IsvalidAge)
// console.log(IsvalidAge); // 0
// console.log(IsReallyValid); // false

let Name = "";
let IsName = Boolean(Name)
// console.log(IsName); //false

let Name2 = "Avi";
let IsName2 = Boolean(Name2)
let Surname = " Jha";

// console.log(IsName2); //true

console.log(Name2 + Surname);  // Avi Jha


