function paliandrome(str) {
    if(str.length <= 1) {
        return true
    } 

    if (str[0] !== str[str.length -1]) {
        return false
    }

    return paliandrome(str.slice(1, str.length -1))
}

console.log(paliandrome('madam'))
console.log(paliandrome('hello'))