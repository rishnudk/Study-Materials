

function rev(str) {
    if(str.length === 0) {
        return str
    }

    return rev(str.slice(1)) + str[0]
}
console.log(rev('hii'))