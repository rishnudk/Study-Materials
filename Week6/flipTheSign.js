const arr = [10, -20, 30, -40]

 arr.forEach((num,index,array) => {
    array[index] = -num
})
console.log(arr);
