


function pal(str) {

    let stack = []

    for(let char of str) {
        stack.push(char)
    }

    for(let i=0; i<str.length;i++) {
        if (str[i] !== stack.pop()) {
            return false
        }
    }
    return true
}

console.log(pal('abaa'))