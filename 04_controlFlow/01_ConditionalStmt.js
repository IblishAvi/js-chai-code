const LoggedIn = false;
if(LoggedIn){
    console.log('Please Login First');
    
}
else{
    function user(uname = 'Avi'){
        console.log(`${uname} Login Successfully`);
        
    }
    user('Rishu')
}

// == , < , >,  <= , >= , === ,!=

let val1 = 20;
let val2 = 25;

if(val1 === val2){
    console.log("Value is Equal:");
    
}

if(val1 != val2){
    console.log("Value is not Equal:");
    
}
if(val1 > val2){
    console.log("Value1  is Greater :");
    
}
if(val1 < val2){
    console.log("Value1 is Lesser:");
    
}
if(val1 <= val2){
    console.log("Value1 is Lessthan Equal:");
    
}