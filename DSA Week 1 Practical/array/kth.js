function kth(arr, n) {
    if(n > arr.length) {
        return null
    }

    arr.sort((a,b) => b- a)

    return arr[n -1]
}

console.log(kth([1,2,3,4,5,6,8], 3))

