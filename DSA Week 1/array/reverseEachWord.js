

function eachWord(str) {

    return str
    .split(' ')
    .map(word => word.split('').reverse().join(''))
    .join('')
}

console.log(eachWord('hello'))