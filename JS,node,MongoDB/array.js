
                   // ARRAY   ///
    //Find the sum of all elements in an array: [10, 20, 30, 40, 50].


    // let arr = [ 10,11,12,13,14,15]

    // let sum = 0
    // for (let i=0; i< arr.length;i++) {
    //     sum = sum + arr[i]
    // }

    // console.log(sum)



    //Find the length of an array without using .length

    let arr = [ 10,11,12,13,14,15]

    let count = 0

    for(let i of arr) {
        count++
    }
    
     console.log(count)


     for (let i=0;i<arr.length-1;i++) {
        if( i !== arr.lenght)
        count++ 
     }
     console.log(count) 
    