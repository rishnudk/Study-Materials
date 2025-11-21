// // const arr1 = [1,2,3]
// // const arr2 = [5,6,7]
// // const combined = [...arr1,...arr2]
// // console.log(combined);

const { log } = require("node:console");

// function sum(a,b, ...numbers){
//     console.log(a);
//     console.log(b);
//     console.log(numbers);
// }
// sum(1,2,3,4,5)

// console.log(1 - +'1');

const arr = [1,2,3,4,5,6]
const slice = arr.slice(1,4)
console.log(slice);
const splice = arr.splice(1,4,12,13,14,15)
console.log(splice);
console.log(arr)


