// Use of Logical And(&&) and Or (||) operator in Control Flow.

// const userLogin = true;
// const LoginusingEmail = true;
// const LoginusingGoogle = true;

// if(userLogin && LoginusingEmail || LoginusingGoogle){
//     console.log("Logged In Successfully ");

// }
// else{
//     console.log("Please Login First");

// }

const Value = 1000;
// if(Value<1000){
//     console.log("Given value is less than 1000");

// }
// else if(Value <750){
//     console.log("Given Value is less than 750");

// }
// else if(Value <500){
//     console.log("Value is Less Than Thousand");
//     }
//     else{
//         console.log("Value is 1000");

//     }
// Short Notation

// if(Value ===1000) console.log('Thousand ');




// Switch Statement

// const month = 13;
// switch (month) {
//   case 1:
//     console.log("Month is January");
//     break;
//   case 2:
//     console.log("Month is February");
//     break;
//   case 3:
//     console.log("Month is March");
//     break;
//   case 4:
//     console.log("Month is April");
//     break;
//   case 5:
//     console.log("Month is May");
//     break;
//   case 6:
//     console.log("Month is June");
//     break;
//   case 7:
//     console.log("Month is July");
//     break;
//   case 8:
//     console.log("Month is August");
//     break;
//   case 9:
//     console.log("Month is September");
//     break;
//   case 10:
//     console.log("Month is October");
//     break;
//   case 11:
//     console.log("Month is November");
//     break;
//   case 12:
//     console.log("Month is December");
//     break;
//   default:
//     console.log("Wrong Choice");

//     break;
// }

// const WeekDay = 1;
// switch (WeekDay) {
//   case 0:
//     console.log("Sunday");
//     break;
//   case 1:
//     console.log("Monday");
//     break;
//   case 2:
//     console.log("Tuesday");
//     break;
//   case 3:
//     console.log("Wednesday");
//     break;
//   case 4:
//     console.log("Thursday");
//     break;
   
//   case 5:
//     console.log("Friday");
//     break;
//     case 6:
//         console.log("Saturday");
//         break;

//   default:
//     break;
// }



// ********************** Truthy Value and Falsy Value *************************

// Truthy Value:  [],{},true,1

// const username = [];

// if(username.length === 0){
//     console.log("Empty Array True");
    
// }


// const UserDetail = {}

// if((UserDetail).length === undefined)
// {
//     console.log("Empty Value is true");
//     console.log(UserDetail);
    
    
// }

// Falsy Value :- false , 0 , -0, BigInt 0n, Function(){},null ,Undefined

// Terniary Operator.

// console.log(2!=5? console.log("Value is Not Equal"): console.log("Value is Equal"));

// Nullish coalescing operator (??)

let value = 5 ?? 15
value = null ?? 20
value = undefined ?? 10
value = undefined ?? null ?? 25

console.log(value);
