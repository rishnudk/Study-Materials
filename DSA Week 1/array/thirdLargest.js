function thirdLargest(arr) {
    if (arr.length < 3) {
        return null
    }

    let largest = -Infinity
    let second = -Infinity
    let third = -Infinity

    for (let i=0; i< arr.length; i++) {
        if (arr[i] > largest) {
            third = second
            second = largest
            largest = arr[i]
        }
        else if(arr[i] > second && largest !== arr[i] ) {
            third = second
            second = arr[i]
        } else if(arr[i] > third && second !== arr[i]) {
            third = arr[i]
        }
    }
    return third
}

console.log(thirdLargest([3,4,5,6,8,1,2,9]))