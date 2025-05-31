

function sortStack(stack) {

    let tempStack = []

    while(stack.length > 0) {
        let temp = stack.pop()

        while(tempStack.length > 0 && tempStack[tempStack.length-1] > temp) {
            stack.push(tempStack.pop())
        }
        tempStack.push(temp)
    }
    return tempStack

}
let stack = [4,5,2,1]
console.log(sortStack(stack))