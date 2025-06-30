// ARRAY   ///
//1  Find the sum of all elements in an array: [10, 20, 30, 40, 50].

// let arr = [ 10,11,12,13,14,15]

// let sum = 0
// for (let i=0; i< arr.length;i++) {
//     sum = sum + arr[i]
// }

// console.log(sum)

// 2  Find the length of an array without using .length

// let arr = [ 10,11,12,13,14,15]

// let count = 0

// for(let i of arr) {
//     count++
// }

//  console.log(count)

// let count = 0
//      for (let i=0;arr[i] !== undefined;i++) {

//         count++
//      }
//      console.log(count)

// function getCount(arr) {
//     let count = 0;

//     while(arr[count] != undefined) {
//         count++
//     }
//     return count
// }
// console.log(getCount(arr))

// function getCount(arr) {
//     let count = 0

//     for(let i  of arr) {
//         count++
//     }
//     return count;
// }
// console.log(getCount(arr))

// 3    Add an element to an array without .push or .unshift.

// arr[arr.length ] = 5

// console.log(arr)

// let newElement = 100
// for ( let i= arr.length;i>0;i--) {
//     arr[i] = arr[i-1]
// }
// arr[0] = newElement

// console.log(arr)

// 4   Remove the last element of an array without .pop

//    arr.length = arr.length - 1

//    console.log(arr)

// let arr = [10, 11, 12, 13, 14, 15];

// for (let i = 0; i < arr.length - 1; i++) {
//   arr[i] = arr[i + 1];
// }
// arr.length = arr.length - 1;
// console.log(arr);


//5  Remove one element from an array manually

let arr = [10, 11, 12, 13, 14, 15];
let removeVal = 12

    let indexToRemove = -1
for (let i=0; i<arr.length;i++) {
    if(arr[i] === removeVal) {
        indexToRemove = i;
        break;
    }
}
    if(indexToRemove !== -1) {
    for(let i=indexToRemove;i<arr.length-1;i++) {
        arr[i] = arr[i+1]
    }

    arr.length = arr.length -1
} 
console.log(arr)  


