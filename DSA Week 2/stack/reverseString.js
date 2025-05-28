

function reverseString(str) {

    let stack = []

    for(let char of str) {
        stack.push(char)
    }
    let temp = ''
    while(stack.length > 0) {
        temp = temp + stack.pop()

    }
    return temp
}

console.log(reverseString('hello'))