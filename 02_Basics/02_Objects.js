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
console.log(tinderuser);
