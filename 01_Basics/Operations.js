//  ************************* Operators *******************************

let a = 12;
let b = 15;
let c = a + b

// console.log("Sum :",a+b) // 27
// console.log("Sum :"+ a+b) // 1215 concatination

// console.log("Sum :" + c) // 27

let d = b - a;
// console.log(" Sub :" + d); // 3

// console.log(" Product is :",a*b); // 180
let f = Number(b/a);
// console.log(" Quotient is :",f); // 1.25

// console.log("Square of",a**2);
// console.log("Square of",a**b);
// console.log("Modulus of",a%b);
let x = ++a
let y = --b
let x2 = a++
let y2 = b--

// console.log("Pre Increment of",x); // 13
// console.log("Pre Decrement of",y); // 14
// console.log("Post Decrement of",x2); // 13
// console.log("P0st Decrement of",y2); //14


// ******************* Comparison ******************************
console.log(a);
console.log(b);


// console.log("Greater ",a>b); // true
// console.log("Smaller ",a<b); // false
// console.log("Equals ",a==b); // false
// console.log("Equals ",a===b); // false
// console.log("Equals ",a!=b); // true

// console.log(null == 0);
// console.log(null >= 0); // Comparison of diffenrent type always gives the unexpected Result
// console.log(null <= 0);  // Comparison of diffenrent type always gives the unexpected Result

console.log( "2 " + 2 + 1); //first value is string so all the value will be concatinate by considering as String
console.log( 2 + 2 + "5"); // here it gives the different result because first two letter is Integer and last one is String so last will be concatinated after Sum of first two.

