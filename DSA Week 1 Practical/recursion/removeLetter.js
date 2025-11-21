


function removeChar(str, charToRemove) {

    if(str.length === 0) return ''

    if(str[0] === charToRemove) {
    return removeChar(str.slice(1), charToRemove)
    } else {
        return str[0] +  removeChar(str.slice(1), charToRemove)
    }

}
console.log(removeChar('hello' , 'e'))