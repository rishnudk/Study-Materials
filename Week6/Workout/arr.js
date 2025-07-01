// let arr = [1,2,3,4,5]
// let arr2 = arr.filter(odd=>odd %2 !== 0)
// console.log(arr2);

// for(let i=0;i<arr2.length;i++)
//     if(arr2 % 2 !== 0){
//         arr2[i] = 0;
//     }
//     console.log(arr2);
    

let arr = [1,2,3,4,5]
let arr2 = arr.splice(3,2)
console.log(arr2);
console.log(arr);

let arr3 = arr.splice(0,0,4,5)
console.log(arr3);
console.log(arr);







