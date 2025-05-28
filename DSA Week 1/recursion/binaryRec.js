function binarySearch(arr, target, start = 0, end = arr.length - 1) {
    if(start > end) {
        return 1
    } 
     
    let mid = Math.floor((start + end) / 2)

    if (arr[mid] === target) {
        return mid
    } else if ( arr[mid] < target) {
        return binarySearch(arr, target, mid + 1, end)
    } else {
        return binarySearch(arr,target, mid - 1 , start)
    }

}

console.log(binarySearch([1,2,3,4,5,6,7,8] , 7))