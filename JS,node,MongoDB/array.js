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

// let arr = [10, 11, 12, 13, 14, 15];
// let removeVal = 12

//     let indexToRemove = -1
// for (let i=0; i<arr.length;i++) {
//     if(arr[i] === removeVal) {
//         indexToRemove = i;
//         break;
//     }
// }
//     if(indexToRemove !== -1) {
//     for(let i=indexToRemove;i<arr.length-1;i++) {
//         arr[i] = arr[i+1]
//     }  

//     arr.length = arr.length -1
// }  
// console.log(arr) 


// let a1 = [1,2,3,4,5]
// let a2 = [6,7,8]

// for(let i=0;i<a2.length;i++) {
//     a1[a1.length] = a2[i]
// }
// console.log(a1)



//6  Find if a given element exists in an array (no .includes).

// let arr = [1,2,3,4]

// let element = 11
// let found = false

// for(let i=0;i<arr.length;i++) {
//     if(arr[i] === element) {
//         found = true;
//         break;
//         console.log('has element')
//     }
// }
// console.log(found)


// 7 Find the first occurrence of a target value in an array

// let arr = [1,2,3,4]
// let target = 4
// let index = -1

// for (let i=0;i<arr.length;i++) {
//     if(arr[i] === target) {
//         index = i
//         break;
//     }
// }
// console.log(index)


//8   Separate even and odd from an array

// let arr = [1,2,3,4,5,6]

// let odd = []
// let even = []

// for (let i=0;i<arr.length;i++) {
//     if(arr[i] % 2 === 0) {
//         odd[odd.length] = arr[i]
//     } else {
//         even[even.length] = arr[i]
//     }
// }
// console.log(odd)
// console.log(even)


// 9 Sum of array

// let arr = [1,2,3]
// let sum =0
// let avg = 0

// for(let i=0;i<arr.length;i++) {
// sum = sum + arr[i]
//  avg = sum / arr.length
// }
// console.log(sum)
// console.log(avg)


//10 Count the number of even and odd numbers in an array
// let arr = [1,2,3,4,5,6,7]

// countOdd = 0
// countEven = 0

// for(let i=0;i<arr.length;i++){
// if(arr[i]  % 2 ) {
//     countEven++
// } else countOdd++
// }
// console.log(countEven)
// console.log(countOdd)


// 11 Count how many times each element appears.

// let arr = [1,2,2,2,3,3,4,5,3,4,5,6,7]

// let freq = {}

// for(let num of arr) {
//     freq[num] = (freq[num] || 0) + 1
// }
// console.log(freq) 

// for(let i=0;i<arr.length; i++) {
//     let val = arr[i] 
//     if(freq[val] === undefined){
//         freq[val] = 1
//     } else {
//         freq[val] ++
//     }
// }

// console.log(freq)
 

//     12  Check if an array has duplicates.   

// let arr = [1,2,2,2,3,3,4,5,3,4,5,6,7]


// let found = false

// for(let i=0;i<arr.length;i++) {
//     for(let j=i+1;j<arr.length;j++) {
//         if(arr[i] === arr[j]) {
//             found = true
//             break;
//         }
//     }
// }

// console.log(found)

// 13  Insert a new element into an array without built-in methods

// arr[arr.length] = 44
// console.log(arr)



let arr = [1,1,1,1,1,1,1,0,0,0,0,1,0];

count = 0

for(let i=0;i<arr.length;i++) {
    count = count + (arr[i] === 0)
}
console.log(count)




//13      Move zeros to the end of an array
    
   
   

 

 