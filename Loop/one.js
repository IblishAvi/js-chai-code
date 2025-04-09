// for (let i = 0; i < 5; i++) {
//     console.log(`Outer Loop : ${i}`);
    
//     for (let j = 0; j <=i; j++) {
//         console.log(`Inner Loop : ${j} and inner Loop ${i}`);
        
//     }
// }

for (let i = 0; i < 5; i++) {
        for (let j = 0; j < i; j++) {
            console.log(i );
            
            
        }
        console.log(" ");
        
}  
//  Table in js

// for (let i = 1; i <=5; i++) {
// //    console.log(`Outer Element : ${i}`);
//    for (let j = 1; j <= 10; j++) {
//         // console.log(`Table of ${i} is `);
//         console.log(i +'*' + j + '=' + i*j);
//     }
//    console.log('\n');

// Trying to print pattern 

let i = 1
for ( ; i <=5 ; ) {
    let j = 1
    for (; j <=5; ) {
        console.log(i)
        j++
    }
    i++;
    //   console.log(end = "");
}


// break and Continue

// for (let index = 1; index < 10; index++) {
//     if(index == 5){
//         console.log("value found:");
//         break
        
//     }
    
// }
for (let index = 1; index < 10; index++) {
    if(index == 5){
        console.log("value found:");
        continue
        
    }
    
}
