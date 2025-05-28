

class Stack {
    constructor() {
        this.items = []
    }

    push(element) {
        this.items.push(element)
    }

    pop() {
        if(this.isEmpty()) {
            return 'stack underflow'
        }
        return this.items.pop()
    }

    display() {
        if(this.isEmpty()) {
            console.log('stack is empty')
        } else {
            console.log('stack contents' , this.items.join(' - '))
        }
    }

    isEmpty() {
        return this.items.length === 0
    }
}

 const stack =  new Stack()

 stack.push(10)
 stack.push(20)
 stack.push(30)
 stack.display()

 console.log(   )