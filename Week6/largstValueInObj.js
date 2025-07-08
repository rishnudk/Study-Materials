const obj = {a:1,b:3,c:4,d:11}

let largestKey = " "
let largestValue = -Infinity

for(let key in obj) {
    if(obj[key] > largestValue) {
        largestValue = obj[key]
        largestKey = key
    }
}
console.log(largestKey);
 