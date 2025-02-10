"use Strict" // Treats all the js code as a newer Version

// alert("Welcome ") //we are using nodejs

let name = 'Avi'
let age = 23;
let IsLoggedIn = true;
let gender = null;
let height = undefined;

// Primitive Types in Javascript.

// Number  holds value upto 2 to the power 52
// BigInt
// string
// Boolean
// null
// undefined
// Object
// Symbol

console.log(typeof undefined)  //undefined
console.log(typeof null) //object

let num = 10;
let num2 = 20.5;
let BigInt = 54852166711n;
let IsTrue = false;
let IsFalse = true;
let WeatherTemp = null;
let myCar ;

console.table([num ,typeof num,num2,typeof num2,BigInt , typeof BigInt,IsTrue, typeof IsTrue])

// Non primitive (Reference)

// Array, Object , Function

let Employee = ['Virat', 'Avi', "Rishu", "Vivek"," Guddu"]
console.log(Employee);
console.log(typeof Employee); //object

let profile = {
    name:'Avi',
    Age : '25',
    gender:"Male"
}

console.log(profile);
console.log(typeof profile); //object



const MyHobby = function(){
    console.log("Love to have ...");
    
}
console.log(MyHobby);
console.log( typeof MyHobby); //Function


