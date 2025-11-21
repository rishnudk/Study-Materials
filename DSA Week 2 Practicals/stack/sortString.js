
function sortString(str) {

    const arr = str.split('')
    console.log(arr)
    const stack = []
    for(let char of arr) {
        stack.push(char)
    }

    const temp = []
    while(stack.length >0) {
        temp.push(stack.pop())
    }
    temp.sort()
    return temp.join('')
}
console.log(sortString('hzello'))