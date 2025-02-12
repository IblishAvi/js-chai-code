// stack is a type of Memory specially used for Primitive type like Number,Boolean ,null,Undefined,BigInt,Symbol,String.

// Stack Examples.

let fname= 'Avi';
 let anotherName =fname;
 anotherName = "Rishu";
 console.log(fname);
 console.log(anotherName);
 
// Heap Examples

let user = {
    email:'Avi@gmail.com',
    name:'Avinash',
}
// console.log(user);

 const user2 =user;

    // user.email= 'Rishu@gmail.com';

 user2.email='Rishu@gmail.com';
 console.log(user2)
 console.log(user)
 
 
