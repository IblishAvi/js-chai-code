// String in javascript.String Can be defined in Two ways.
// First Method
let name = 'Avi';
let Lname = 'Jha';
// Second Method using New Keyword.
// const Fname = new String('Avinash');

// console.log(name);
// console.log(Fname);
// console.log(Fname[0]);

// Methods In String
// console.log(Fname.concat(Lname));

// console.log(Fname.includes('A'));

const Animal = "cat";
// console.log(Animal.charAt(1)); // a
// console.log(Animal.toUpperCase()); // CAT 

// Comparison of String 

const a = 'a';
const b = 'b';
 if (a<b){
    console.log(`${a} is less than ${b} `);
    
 }
 else if (a > b){
    console.log(`${a} is Greater than ${b} `);

 }
 else{
    console.log(`${a} is Equal to ${b} `);
    
 }

const sentense = 'A quick brown fox jumps over the lazy dog.';

// console.log(sentense.endsWith("fox")); //false
// console.log(sentense.endsWith("Dog.")); // false
// console.log(sentense.endsWith("dog.")); // True
// console.log(sentense.includes("dog.")); // True
// console.log(sentense.indexOf("dog.")); // 39
// console.log(sentense.indexOf("A")); // 0
// console.log(sentense.indexOf("f")); // 14
console.log(sentense.replace("quick","kuicq")); //A kuicq brown fox jumps over the lazy dog.
console.log(sentense); //A quick brown fox jumps over the lazy dog.



