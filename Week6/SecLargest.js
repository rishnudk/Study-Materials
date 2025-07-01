let str = [42,765,234,89,32]

let largest = -Infinity
let sec = -Infinity

for (let i =0;i<str.length;i++){
    if (str[i] > largest) {
        sec = largest
        largest = str[i]
    }
    else if (str[i]>sec && str[i] !== largest) {
        sec = str[ i]
    }
    
}
console.log(largest)
console.log(sec)