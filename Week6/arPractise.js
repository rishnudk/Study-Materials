//Find the largest even number in an array using reduce().

// arr = [1,2,3,4,5,6]
// even = arr.reduce((acc,cur) => cur % 2 === 0 ? cur : acc ,0)
// console.log(even);


//Remove duplicate elements from an array using Set. 

// let arr = [11,22,33,22,33,44]
// let duplicate = [...new Set(arr)]
// console.log(duplicate);

// let arr = [1,1,2,2,3,3,4,5,5,4,6,6]
// even = [...new Set(arr.filter(num => num % 2 === 0))]
// console.log(even);
// console.log(arr);


// Remove duplicate even numbers from an array. 

// let arr5 = [1, 2, 3, 1, 2, 3, 4, 5, 6, 6];
// let new5 = arr5.filter(num => num % 2 === 0); // Filters even numbers
// console.log(new5);
// // console.log(arr5);

// let set5 = [...new Set(new5)]
// console.log(set5);

// Remove nullish (null or undefined) elements from an array 

// let arr = [1,2,3,null,undefined]
// let nulls = arr.filter(num => num !=null)
// console.log(nulls);


//11. Remove the nth index from an array. 
// let arr = [1,2,3,4,5,6,7]
// let n =2
// arr.splice(n,1)
// console.log(arr);

//12. Remove the middle element from an array.

// let arr = [1,2,3,4,5,6,7]
// arr.splice(3,1)
// console.log(arr);

//13. Find digits missing in an array. 

// let arr = [1,2,3,4,5]
// let completearr = [0,1,2,3,4,5,6,7,8,9]
// let missing = completearr.filter(num=> !arr.includes(num))
// console.log(missing);
 
//15. Remove multiples of three from an array. 
// let arr = [1,2,3,6,9,4,5]
// let multiple = arr.filter(num => num % 3 !==0)
// console.log(multiple);

//16. Find the largest element in an array. 
// let arr = [1,2,3,6,4]
// let large = Math.max(...arr)
// console.log(arr);


// let arr = [1,4,6,2,8]
// let large = -Infinity;
// for(let i =0; i<=arr.length; i++){


//     if(arr[i] > large){
//         large = arr[i]
        
//     }}
//     console.log(large)

//17. Find the second-largest element in an array. 

// let arr = [1,2,3,4,6]
// let sorted = arr.sort((a,b,c) => a-c)
// console.log(sorted);
// let secondLarge = arr[1]
// console.log(secondLarge);

// let arr = [1,4,6,87,23]
// large = -Infinity
// secondLarge = -Infinity
// for(let i = 0;i<=arr.length;i++){
//     if(arr[i] > large){
//         secondLarge = large
//         large = arr[i]

//     }
//     else if ( arr[i] > secondLarge && arr[i] !== large){
//         secondLarge = arr[i]
//     }
        
//     }

// console.log(large);
// console.log(secondLarge);

//18. Find the average of an array using an array method. 

// let arr = [1,2,3,4,5]
// let sum = arr.reduce((acc,cur) => acc + cur , 0)
// let avg = sum/arr.length
// console.log(avg);

//19. Find unique elements in an array. 
//  let arr = [1,2,3,4,5,1,2,3]
// let uniq = [...new Set(arr)]
//  console.log(uniq);

//20. Reverse a string using a loop. 

// let str = 'hello'
// let reverse = ' '
// for(let i = str.length-1; i<=0;i--){
//     reverse = str[i]+reverse
// }
// console.log(reverse);

// let str = 'hello';
// let reverse = '';
// for (let i = str.length - 1; i >= 0; i--) {
//     reverse =  reverse+str[i];
// }
// console.log(reverse);

// let str = ('hello')
// let reverse = str.split('').reverse().join('')
// console.log(reverse);

// let rev = str.split('')
// console.log(rev);
// let re = rev.reverse()
// console.log(re);
// let jo = re.join('')
// console.log(jo);

//Reversing Multiple Strings
// let str = ['hello', 'hi']
// let reverse = str.map(string => string.split('').reverse().join(''))
// console.log(reverse);

//22. Remove vowels from a string. 
// let str= 'hello world'
// let nostr = str.replace(/[aeiouAEIOU]/g, '')
// console.log(nostr);

//reverse array
// let arr =[1,2,3,4,5]
// let res = []
// for(let i=arr.length-1;i>=0; i--){
//     res.push(arr[i])  
// }
// console.log(res);

//Remove a key-value pair from an object. 
// let obj = { name : 'john', age: 11,city : 'kannur'}
// delete obj.age;
// console.log(obj);
// obj.country = 'india'
// console.log(obj);


//Check if an object is empty or not.
let emptyObj = {}
let obj = { name : 'john'}
let isemptyObj = Object.keys(emptyObj).length === 0
let isobj = Object.keys(obj).length === 0
console.log(isemptyObj);
console.log(isobj);

//Methods to Remove Last Property from an Object

// let obj = { name : 'joe', age : 18 , place : 'kannur'}
// let lastkey = null
// let key = Object.keys(obj)

// for(let i=0; i<key.length;i++){
//     if(i===key.length-1) {
//         lastkey = key[i]
//     }
// }
// if(lastkey) 
// {    delete obj[lastkey]
// }
// console.log(obj);

// removve dup even from arr 

// let arr =  [1,2,3,4,5,6,2,4,6]
// let even = arr.filter(num => num % 2 === 0)
// console.log(even);
// let dup = [... new Set(even)]
// console.log(dup);




















 








 

