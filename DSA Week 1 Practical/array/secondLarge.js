function secondLargest(arr) {
   if(arr.length <2) {
    return null
   } 

   let largest = -Infinity
   let second = -Infinity

   for(let i=0; i<arr.length; i++) {
    if (arr[i] > largest){
        second = largest
    largest = arr[i]
    
   } else if ( arr[i] > second ) {
    second = arr[i]
   }
}
   return second
  

}

console.log(secondLargest([1,5,8,9,2,4,6]))