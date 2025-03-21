function mydetail(num1 ,num2){
    console.log('Hii, I am avi');
    return num1+num2;
}
// console.log(mydetail(4,6))
// Function 

const num1 = 12;
const num2 = 15;

function calculate(){
    return num1+num2
}
// console.log(calculate());


// Parameterized Function.

function calculateSum(x,y){
// console.log(x+y);
return x+y;

}
const num = calculateSum(3,5)
// console.log(num); // Undefined.
// console.log(calculateSum(3,"a")); // 3a
// console.log(calculateSum(3,"4")); // 34
// console.log(calculateSum(3,4)); // 7
// console.log(calculateSum(3,null)); //3
// console.log(calculateSum(3,"@")); //3@


// function Loginuser(username){
    // console.log(`${username} just Logged in.`);
    
// }
// Loginuser("Neha")

// Default Parameter in Function

// function Loginuser(username='Avi'){
//     console.log(`${username} just Logged in.`);
    
// }
// Loginuser()

// Rest operator in Javascript.
function myname(val1,val2,...num1){
    // console.log(num1);
    return `${val1} ${val2} `, num1;

}
// console.log(myname(200,240,270,300)); //Misterious Behaviour have came into picture it only prints value of num1


// Function of Object.
const userDetail = {
    name:"Avi",
    price:1900
}

function Details(anyObject){
console.log(` name is :${anyObject.name} and Price is ${anyObject.price}`);

}
Details(userDetail)


// Arrow Function 

const gases =['nitrogen','hydrogen','Ammonia']

const a2 = gases.map((s)=> console.log(s.length))