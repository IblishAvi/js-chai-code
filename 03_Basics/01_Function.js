function mydetail(num1 ,num2){
    console.log('Hii, I am avi');
    return num1+num2;
}
// console.log(mydetail(4,6))

function restFunc(...num1){
    return num1;
}

console.log(restFunc(200,300,400));

const userDetail = {
    name:"Avi",
    Email:'Avi@gmail.com',
    ID :'adfmll1434'
}

function Details(anyObject){
console.log(anyObject.name);
console.log(anyObject.Email);


}
Details(userDetail)

// Arrow Function 

const gases =['nitrogen','hydrogen','Ammonia']

const a2 = gases.map((s)=> console.log(s.length))