// function sum(arr) {
//     let sum = 0 

//     for(let i=0; i<arr.length; i++) {
//         sum = sum + arr[i]
//     }
//     return sum
// }

// console.log(sum([1,2,3,4,5]))


function sum (arr , n) {
    if (n <= 0) {
        return 0
    }

    return sum(arr, n - 1, ) + arr [n - 1]
}

console.log(sum([1,2,3,4,5], 5))