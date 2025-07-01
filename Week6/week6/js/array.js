let arr = [1,2,3,4]
let arr2 = [6,7,8,9]

// function avgeven(arr){
//     let even = arr.filter((num) => num % 2 === 0)
//     const sum = even.reduce((acc,num) => acc+num,0)
//     return sum/even.length
// }
// console.log(avgeven(arr));
// arr.forEach((array) => console.log(array))

// const combine =arr.concat(arr2)
const combine = [...arr,...arr2]

console.log(combine);
