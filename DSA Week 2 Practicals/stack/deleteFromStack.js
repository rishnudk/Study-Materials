

function del(stack, target) {
    let temp = []

    while(stack.length > 0) {
        let top = stack.pop()
        if(top === target) {
            break;
        }
        temp.push(top)
    }
    while(temp.length > 0 ) {
        stack.push(temp.pop())
    }
    return stack
}

let stack = [1,2,3,4]
console.log(del(stack, 3))