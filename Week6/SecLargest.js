let str = [42,765,234,765,89,32]

let largest = -Infinity
let sec = -Infinity
let third = 0

for (let i =0;i<str.length;i++){
    if (str[i] > largest) {
        sec = largest
        largest = str[i]
    }
    else if (str[i]>sec && str[i] !== largest) {
        sec = str[ i]
    } else if ( str[i] > third && str[i] !== ( largest || sec) ) {
        third = str[i]
    } 
    
}
console.log(largest)
console.log(sec)
console.log(third)