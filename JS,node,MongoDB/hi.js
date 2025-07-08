let arr1 = [1,2,3,4,5]
let arr2 = [3,4,5,6,7]

for(let i=0;i<arr1.length;i++) {
    for(let j=0;j<arr2.length;j++) {
        if(arr1[i] === arr2[j]) {
            console.log(`${arr1[i]}, ${arr2[j]}`)
        }
    }
}


let result = arr1.filter(num => arr2.includes(num))

console.log(result)
 