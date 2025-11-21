function capital(str){
    return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
}
console.log(capital('helloo'));


// function capital(str) {
//     let first = str.charAt(0).toUpperCase()
//     let last = str.charAt(str.length-1).toUpperCase()
//     let middle = str.slice(1,str.length-1)
//     return first + middle + last
// }
// console.log(capital('hii there')); 


