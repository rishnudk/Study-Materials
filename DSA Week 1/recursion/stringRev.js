function reverseString(str) {
    if( str === '') {
        return '';
    } else {
        return reverseString(str.slice(1)) + str[0]
    }
}
console.log(reverseString('hello'))