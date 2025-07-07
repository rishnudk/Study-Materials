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



// let arr = [1,1,1,1,1,1,1,0,0,0,0,1,0];

// count = 0

// for(let i=0;i<arr.length;i++) {
//     count = count + (arr[i] === 0)
// }
// console.log(count)      
     
 
  
  
//13      Move zeros to the end of an array 

// let arr = [1,0,2,0,3,6]

// let result = []
// let zeroCount = 0

// for(let i=0; i<arr.length; i++) {
//     if(arr[i] === 0) {
//         zeroCount++


//     } else {
//         result.push(arr[i])
//     }

    
// }
// while(zeroCount > 0) {
//         result.unshift(0);
//         zeroCount--;

//     }

// console.log(result)


// 14  delete first and last element

// let arr = [1,0,2,0,3,6]

// arr.pop(arr.length-1)
// console.log(arr)
// arr.shift(arr.length-1)
// console.log(arr)


// 15 filter even number

// let arr = [1,0,2,0,3,6]
// let a1 = []

// for(let i=0;i<arr.length;i++) {
// if(arr[i] % 2 == 0) {
//     a1 = arr[i]
// }
// }
// console.log(a1)


//  16 Reverse an array without using .reverse() or extra array.



// let arr = [1,4,2,6,3]

// let start = 0
// let end = arr.length - 1

// while (start< end) {
    
//     let temp = arr[start]
//     arr[start] = arr[end]
//     arr[end] = temp

//     end--
//     start++
// }
// console.log(arr)


// 17   Remove duplicates from an array (no Set) / unique print

// let arr = [1,4,4,6,3,2,6,3]

// let unique =  {}
// let result = []

// for(let i=0;i<arr.length;i++) {
//     if(!unique[arr[i]]) {
//         unique[arr[i]] = true
//         result.push(arr[i])
//     }
// }

// console.log(result)


//  18   Remove duplicate even numbers from an array


// let arr = [1,4,4,6,3,2,6,7,3]

// let unique =  {}
// let result = []


// for(let i=0;i<arr.length;i++) {

//     let num = arr[i]

//     if(num % 2 === 0) {

//         if(!unique[num]){
//             unique[num] = true
//             result.push(num)
//         }
//     }
//         else {
//             result.push(num)
//             }    }
    

// console.log(result)



// 19  remove all zeros 

// let arr = [1,0,2,0,3,4,5]

// let nonZero = []
// for(let i=0;i<arr.length;i++) {
//     if(arr[i] !== 0) {
//         nonZero.push(arr[i])
//     }
// }

// let result = arr.filter(num => num !== 0)

// console.log(nonZero)
// console.log(result)


// 20 remove prime num

// function isPrime(num) {

//     if(num <= 1) return false;
//     if(num === 2) return true
//     if(num % 2 ===0) return false

//     for(let i=3; i*i <= num; i+= 2) {
//         if(num % i === 0) return false
//     }
//      return true
// }

// let arr = [1,2,3,4,5,6,7]

// let result = arr.filter(num => !isPrime(num))

// console.log(result)

// 21  Remove a specific value


// let arr = [1,2,3,4,5,6,7]

// let remove = 5

// let result = arr.filter(num => num !== remove)

// console.log(result)


// let arr = [1, 2, 3, 4, 3, 5];
// let valueToRemove = 3;
// let index = 0;

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] !== valueToRemove) {
//     arr[index++] = arr[i];
//   }
// }

// arr.length = index
// console.log(arr);  


///   22 Remove the second last element from an array

// let arr = [100,300,200,500,400]

// let index = arr.length - 2

// for(let i=index;i<arr.length;i++) {
//   arr[i] = arr[i+1]
// }
// arr.length = arr.length - 1
// console.log(arr)


// 23  . Remove the smallest number from an array

// let arr = [100,300,200,500,400]
// let min = arr[0]
// let index = 0

// for(let i=1;i<arr.length; i++) {
//   if(arr[i] < min) {
//     min = arr[i]
//     index = i
//   }
// }

// for(let i=index;i<arr.length;i++) {
//   arr[i] = arr[i+1]
// }
// arr.length -= 1
// console.log(arr)
// //method 2

// arr.sort((a,b) => a-b)
// console.log(arr)
// arr.shift()
// console.log(arr)

// //remove middleṇ

// let middle = Math.floor(arr.length / 2)

// for(let i = middle;i<arr.length; i++) {
//   arr[i] = arr[i + 1]
// }
// arr.length -= 1

// console.log(arr)
 
 
let str  = 'hello' 

let space = str.map (str => str.split('').join(' '))
console.log(space)   
       
 
   
      
    
   
  
  
  
   