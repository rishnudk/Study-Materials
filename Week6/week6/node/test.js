const sum = (nums) => nums.reduce((acc,curr) => {
    acc+curr
    return acc
},0 )

let n = [1,2,3,4,5]

console.log(sum(n));
