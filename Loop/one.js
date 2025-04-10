// for (let i = 0; i < 5; i++) {
//     console.log(`Outer Loop : ${i}`);
    
//     for (let j = 0; j <=i; j++) {
//         console.log(`Inner Loop : ${j} and inner Loop ${i}`);
        
//     }
// }

// for (let i = 0; i < 5; i++) {
//         for (let j = 0; j < i; j++) {
//             console.log(i );
            
            
//         }
//         console.log(" ");
        
// }  
//  Table in js

// for (let i = 1; i <=5; i++) {
// //    console.log(`Outer Element : ${i}`);
//    for (let j = 1; j <= 10; j++) {
//         // console.log(`Table of ${i} is `);
//         console.log(i +'*' + j + '=' + i*j);
//     }
//    console.log('\n');

// Trying to print pattern 

// let i = 1
// for ( ; i <=5 ; ) {
//     let j = 1
//     for (; j <=5; ) {
//         console.log(i)
//         j++
//     }
//     i++;
//     //   console.log(end = "");
// }


// break and Continue

// for (let index = 1; index < 10; index++) {
//     if(index == 5){
//         console.log(`Value found ${index}`);
//         break
        
//     }
//      console.log(index);
// }

// for (let index = 1; index < 10; index++) {
//     if(index == 5){
//         console.log(`Value skipped ${index}`);
//         continue
        
//     }
//     console.log(index);
    
// }

// const myArray = [ 'Avi', 26 ," male", "avi@gmail.com"]

// for (let index = 0; index < myArray.length; index++) {
//     const element = myArray[index];
//     console.table(element);
    
// }


const BinarySearch = [10,20,25,40,45,50];

let start = 0;
let end = BinarySearch.length;
let mid = (start + end)/2;
const  input = 20;


for (let i = 0; i< BinarySearch.length; i++) {
    if(input>mid){
        start = BinarySearch[mid]+1;
        BinarySearch[mid] = (start+end)/2
    }
    else if(input< mid)
    {
        BinarySearch[end] = mid -1;
        mid = (start+end)/2
    }
    else{
    console.log(mid);
    }
    
}