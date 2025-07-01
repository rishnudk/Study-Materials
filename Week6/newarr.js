let arr1 = [1,2,3,4,5,6,7,9,15,18]
let arr2 = [1,3,5,6,9,15]
let arr3 = [...arr1,...arr2]
// console.log(arr3);
let mul3 = arr3.filter(num => num % 3 !==0)
console.log(mul3);

let uniq = [...new Set(mul3)]
console.log(uniq);

let sum = uniq.reduce((acc,cur) => acc+ cur,0)
console.log(sum);

let avg = sum/uniq.length
console.log(avg);
