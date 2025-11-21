// function reverse (str) {

//     return str.split('').reverse().join('')
// }
// console.log(reverse('hello'))

function rev(str) {

    let r = ''
    for(let i=str.length -1; i>=0; i--) {
        r = r +str[i]
    }
    return r
}

console.log(rev('helloo hiii helooo'))