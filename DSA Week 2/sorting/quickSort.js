function quickSort(arr) {
    if(arr.length <= 1) return arr

    let pivot = arr[arr.length-1]
    let left = []
    let right = []

    for (let i=0;i< arr.length-1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }
    return [...quickSort(left), pivot, ...quickSort(right)]
}

console.log(quickSort([7,3,4,1,3,8,7]))



// function quickSort(arr,left = 0, right = arr.length - 1) {
//     if(left < right) {
//         let pivot = partition(arr, left, right)

//         quickSort(arr, left , pivot - 1)
//         quickSort(arr, pivot + 1, right)
//     }
//     return arr
// }

// function partition(arr, left, right) {
//     let pivot =  arr[right]
//     let i = left - 1
//     for(let j=left; j< right; j++) {
//         if(arr[j] < pivot){
//             i++
//             [arr[i] , arr[j]] = [arr[j] , arr[i]]
//         }

//     }
//      [arr[i+1] , arr[right]] = [arr[right], arr[i+1]]
//     return i + 1
// }

// console.log(quickSort([8,3,5,2,4]))

