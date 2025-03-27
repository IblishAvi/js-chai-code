
function detail(){
    let fname ="Avi";
    const id = '123ab';
    var Location = 'Delhi';
    // console.table([fname,id,Location])
}
detail()
// console.table([fname,id,Location]) // here the scope of fname ,id,Location is limited and it can't be accessed here.

if(true){
    let a= 10;
    const b= 20;
    // console.log(a,b);
    
}

function one(){
    const username= 'Avinash';

    function  two(){
        const Website = 'Youtube';
        console.log(username);
        
        console.log(Website); 
    }
    // console.log(Website); //Not accessible here because of Local Scope
    two()
    
}
one()

if(true){
    const usernam = 'Rishu';
    if(usernam == 'Rishu'){
        const Website =  'Github';

        console.log(usernam + Website);
        
    }
    // console.log(Website); //It has local scope so it is not accessible here.
    
}
// console.log(usernam); // it has Block scope


// ++++++++++++++++++++++++++++++++++++++++++++++ Hoistiong intro ++++++++++++++++++++++

console.log(addone(7));
function addone(num){
    return num+1;
}
addone(5)

// Anonymous Function or unnamed Function.
const addtwo = function(num){
    return num+2;
}
console.log(addtwo(10));
