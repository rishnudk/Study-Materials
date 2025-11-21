

function removeChar(str, charToRemove) {

    let result = ''

    for(let i of str) {
        if(i !== charToRemove) {
            result += i
        }
    }
    return result
}
console.log(removeChar('hello world' , 'l'))