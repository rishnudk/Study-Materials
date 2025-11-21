const arr = [11,12,13]

let sum = 0
let i = 0

// while (i < arr.length) {
//     sum = sum + arr[i]
//     i++
// }
// console.log(sum);

arr.forEach((num) => {
    sum = sum+num
})
console.log(sum);

