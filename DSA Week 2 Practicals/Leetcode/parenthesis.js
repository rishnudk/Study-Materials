

function parenthesis(str) {
let stack = []
let pairs = { ')' : '(', '}' : '{' , ']': '[' }

for(let char of str) {
    if(char === '(' || char === '{' || char === '[') {
        stack.push(char)
    } else if (char === ')' || char === '}' || char === ']') {
        if(stack.pop() !== pairs[char]) {
            return false
        }
    }
}
return stack.length === 0
}

console.log(parenthesis("({[]})"))