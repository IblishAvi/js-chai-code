// This Keyboard.


const user = {
    username : 'Avi',
    Price:'999',

    WelcomeMsg : function(){
        // console.log(`${this.username} Welcome ,You are Signed in.`);
    //    console.log(this);
        
    }
}
user.username = 'Rishu'
// console.log(user.username);
user.WelcomeMsg()
// console.log(this);

// function chai(){
//     console.log(this);
    
// }
const  chai = function(){
    const username2 = 'AVi';
        console.log(this.username2);
    
        console.log(this);
        
    }

    const  addtwo = (num1,num2) => {
        return num1+num2
    }
    // console.log(addtwo(3,9));
    
    const addtwo2 = (x,y) => x+y
    console.log(addtwo2(7,7));
    