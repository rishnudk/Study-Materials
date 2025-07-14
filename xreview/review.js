

function sum(str , arr) {
         let sumEven = 0

    if(str.length % 2 === 0) {
    for(let i=0;i<arr.length;i++) {
            if(arr[i] % 2 === 0) {
                sumEven = sumEven + arr[i]
            }
        }
    }
return sumEven
}
let str = 'hedllo'
let arr = [1,2,3,4,5,6,7,8,9]
let hi = sum(str,arr)
console.log(hi)
