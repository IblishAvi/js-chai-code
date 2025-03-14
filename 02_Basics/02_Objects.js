// object sigleton


// object literal
const Myhobby = Symbol('key1');
const JsUser = {
    name : "Avi",
    Age: 28,
    [Myhobby] :"Book",
    "Firstname" :"Avi",
    Location:"Hajipur",
    email:"Avi@gmail.com",
    isLoggedin:'False',
    FulluserName:{
        username:" Avi",
        Title : 'Jha'
    }

}
// console.log(JsUser);
// Object.freeze(JsUser)
JsUser.Age= 30;
// console.log(JsUser);
// console.log(JsUser.Firstname);

JsUser.getname = function (){
    // console.log('Avi Js Expert');
    
}
// console.log(JsUser.getname);

const tinderuser = new Object();

tinderuser.id = '123abd';
tinderuser.email = 'Avi@gmail.com';
tinderuser.FulluserName = {
    username:{
        Firstname:'Avinash',
        Lastname:'Jha'
    }
}
// console.log(tinderuser.FulluserName.username.Firstname);


const obj1 = { 1:'a',2:'b'}
const obj2 = { 3:'c',4:'d'}

// const obj3 = Object.assign(obj1,obj2) 
// console.log(obj3); //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

// Spread Operator in Javascript.
const obj3 = {...obj1,...obj2}
// console.log(typeof obj3);
const obj4 = {...obj3}
// console.log(obj4);
// console.log(typeof obj4);


// console.log(obj3); //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }


// Array Of Objects 

const userDetail = [
    {
        id:'123a',
        name:'Avi',
        Location:'Gujarat',
    },
    {
        id:'123b',
        name:'Avinash',
        Location:'Ahmedabad',
    },
    {
        id:'123c',
        name:'Rishu',
        Location:'Gurgaon',
    },
    {
        id:'123d',
        name:'Avi Jha',
        Location:'Noida',
    }
]

// console.log(userDetail);
// console.log(`${userDetail[0].id}  ${userDetail[0].name}`);
// console.log(`${userDetail[1].id}  ${userDetail[1].name}`);


// console.log(Object.keys(userDetail));
// console.log(Object.values(userDetail));
// console.log(Object.keys(obj3));
// console.log(Object.values(obj3));
console.log(Object.entries(obj3)); //[ [ '1', 'a' ], [ '2', 'b' ], [ '3', 'c' ], [ '4', 'd' ] ]  Returns the array of Objects.
console.log(obj3.hasOwnProperty("a")); // false Returns Boolean Values.

const Course ={
        usrname :'Avi',
        CourseName:'Js in Hindi',
        CourseInstructor:'Hitesh Chaudhary',
        CourseFee :'999'
    }

    const {CourseInstructor :instructor} = Course
    console.log(instructor);

    // JSON Introduction.

    {
        "Name" : "Avi",
        "CourseName" : "Javascript in Hindi",
        "Price":"Free"
    }