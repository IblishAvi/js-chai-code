const arr = [1,2,3,4,5,6,"Avinash",true]
const NewArr = new Array("Avi", "Rupa", "Vivek");

// console.log(arr);
// console.log(typeof arr); // Expected Output object.

// console.log( arr.length); // 8 

// Array method.

const user = ["Avi","Rishu","Raja","Vivek"]
const merge = user.join(arr)
console.log(merge);
const newArr = NewArr.concat(user)
console.log(newArr);
console.log(newArr);
newArr.push(15)
newArr.push(true)
console.log(newArr);
newArr.unshift(20)
console.log(newArr);

newArr.splice(2,2)
console.log(newArr);
