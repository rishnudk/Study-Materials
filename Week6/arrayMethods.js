////push/// add elements to the array from last
const arr = [1,2,3,4,5]
arr.push(6,7,8);
console.log(arr);

////pop/// removes last element from array
arr.pop();
console.log(arr);
  
////unshift/// add elements at the start
arr.unshift(0)
console.log(arr);

/////shift///// removes the first elemetnfrom the array
arr.shift()
console.log(arr);

///splice///add/remove items at a specific index (start, deleteCount,additems)
arr.splice(3,3,'a','b','c')
console.log(arr);

///concat///// conbine two araay into one
let arr2 = [10,11]
let combined = arr.concat(arr2)
console.log(combined);

///slice/// extracts a part of array into a new array without modifying the original
let sliced =  combined.slice(1,3)
console.log(sliced);

/////indexOF(item)///finding and filtering elements//
let value = arr.indexOf('a')
console.log(value);

//////lastindexOf()///
let value1 = arr.lastIndexOf('a')
console.log(value1);

//findIndex////
let value2 = arr.findIndex(x=> x<3)
console.log(value2);

///filter/// creates a new array with elements that satisfies the callback function
const filtered = arr.filter((x)=>{
    return x<3
})
console.log(filtered);

///map////
// console.log(arr);
// const filteres2 arr.filter(x => typeof x === 'num');

//include///
// const value7 = filter.includes(3)
// console.log(value7);

const result2 = arr.from('hello')
console.log(result2);












