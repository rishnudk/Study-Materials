// //1. Print numbers from 1 to 10 using a do-while loop.

// // for ( let i =1; i<=10;i++)
// //     console.log(i);

// // let i = 1;
// // do {
// //     console.log(i);
// //     i++
// // }while(i<=10)

// //    2. Reverse a string using a loop. 

// function reverseSting(str) {
//     let reversedstr = ''
//     for (let i = str.length-1; i>= 0 ;i--){
//         reversedstr = reversedstr +str[i]
//     }
//     return reversedstr
// }
// // let original = 'hello'
// // let reversed = reverseSting(original)
// console.log(reverseSting('hiii'));

// //3. Print even numbers in reverse order. 
// function evenRev(n) {
//     for (let i = n; i>=2;i-=2)
//         console.log(i);
        
// }
// evenRev(10);


// //4. Loop through an object and print keys and values. 

// let obj = { name :'john', age : 15}
// for(let key in obj) {
//     if(obj.hasOwnProperty(key)){
//         console.log(`${key} : ${obj[key]}`);
        
//     }
// }

// // Count occurrences of elements in an array using reduce(). \

// let array1 = ['banana','apple','cherry','banana','apple']
// let count = array1.reduce((acc,cur) => {
//     if(acc[cur]) {
//         acc[cur]++;
//     }
//     else{acc[cur] = 1}
//     return acc;
// },{})
   
// console.log(count);

// //Separate even and odd numbers into two separate arrays except zeros

// const array2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const evenNum = array2.filter(num => num % 2 == 0 && num !== 0)
// const oddNum = array2.filter( num => num % 2 !== 0)
// console.log(evenNum);
// console.log(oddNum);

// //7. Find the largest even number in an array using reduce(). 
// const array3 = [1,2,3,4,5,6]
// let largeEven = array3.reduce((acc,cur) => {
//     if(cur > acc && cur % 2 == 0) {
//         return cur;
//             }
//     return acc
// }, -Infinity)
// console.log(largeEven);

// //8. Remove duplicate elements from an array using Set. 

// let arr4 = [ 1,1,6,7] 
// let new4 = [...new Set(arr4)]
// console.log(new5)

// //8. Remove duplicate even numbers from an array. 

let arr5 = [1, 2, 3, 1, 2, 3, 4, 5, 6, 6];
let new5 = arr5.filter(num => num % 2 === 0); // Filters even numbers
console.log(new5);
let set5 = [...new Set(new5)]
console.log(set5);

//9. . Remove nullish (null or undefined) elements from an array.

// let arr = [1,null,2,3,null,undefined,NaN]
// let new6 = arr.filter(num6 => num6 != null && !isNaN(num6))
// console.log(new6);

//11. Remove the nth index from an array. 

// let arr = [1,2,3,4,5]
// let n =2
// arr.splice(n,3)
// console.log(arr);

//12. Remove the middle element from an array. 
// let arr = [1,2,3,4,5]
// let middle = Math.floor(arr.length/2)
// arr.splice(middle,1)
// console.log(middle);
// console.log(arr);

// 3. Find digits missing in an array. 
// let arr = [1,2,3,4,5]







