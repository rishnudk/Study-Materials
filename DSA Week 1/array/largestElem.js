function largest(arr) {
    let largest = -Infinity
   

    for(let i=0; i< arr.length; i++) {
        if (arr[i] > largest)  {
            largest = arr[i]
           }   }
return largest
}

console.log(largest([1,5,7,3,5,8]))