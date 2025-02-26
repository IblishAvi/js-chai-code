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

// const a = 'a';
// const b = 'b';
//  if (a<b){
//     console.log(`${a} is less than ${b} `);
    
//  }
//  else if (a > b){
//     console.log(`${a} is Greater than ${b} `);

//  }
//  else{
//     console.log(`${a} is Equal to ${b} `);
    
//  }

// const sentense = 'A quick brown fox jumps over the lazy dog.';

// console.log(sentense.endsWith("fox")); //false
// console.log(sentense.endsWith("Dog.")); // false
// console.log(sentense.endsWith("dog.")); // True
// console.log(sentense.includes("dog.")); // True
// console.log(sentense.indexOf("dog.")); // 39
// console.log(sentense.indexOf("A")); // 0
// console.log(sentense.indexOf("f")); // 14
// console.log(sentense.replace("quick","kuicq")); //A kuicq brown fox jumps over the lazy dog.
// console.log(sentense); //A quick brown fox jumps over the lazy dog.


const areEqualInUpperCase = (str1, str2) =>
   str1.toUpperCase() === str2.toUpperCase();
 const areEqualInLowerCase = (str1, str2) =>
   str1.toLowerCase() === str2.toLowerCase();
 
//  console.log(areEqualInUpperCase("ß", "ss")); // true; should be false
//  console.log(areEqualInLowerCase("ı", "I"));   // false; should be true
 

 const strPrim = "foo"; // A literal is a string primitive
 const strPrim2 = String(1); // Coerced into the string primitive "1"
 const strPrim3 = String(true); // Coerced into the string primitive "true"
 const strObj = new String(strPrim); // String with new returns a string wrapper object.
 
//  console.log(typeof strPrim); // "string"
//  console.log(typeof strPrim2); // "string"
//  console.log(typeof strPrim3); // "string"
//  console.log(typeof strObj); // "object"
 
 const s1 = "2 + 2"; // creates a string primitive
 const s2 = new String("2 + 2"); // creates a String object
//  console.log(eval(s1)); // returns the number 4
//  console.log(eval(s2)); // returns the string "2 + 2"

"😄".split(""); // ['\ud83d', '\ude04']; splits into two lone surrogates

// "Backhand Index Pointing Right: Dark Skin Tone"
[..."👉🏿"]; // ['👉', '🏿']
// splits into the basic "Backhand Index Pointing Right" emoji and
// the "Dark skin tone" emoji

// "Family: Man, Boy"
[..."👨‍👦"]; // [ '👨', '‍', '👦' ]
// splits into the "Man" and "Boy" emoji, joined by a ZWJ

// The United Nations flag
[..."🇺🇳"]; // [ '🇺', '🇳' ]
// splits into two "region indicator" letters "U" and "N".
// All flag emojis are formed by joining two region indicator letters
