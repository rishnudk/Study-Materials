

class MinStack {
    constructor(){
          this.stack = []
         this.minStack = []
    }

    push(val) {
        this.stack.push(val)
        if(this.minStack.length === 0 || val <= this.minStack[this.minStack.length - 1]){
            this.minStack.push(val)
        }
    }
    pop() {
        const popped = this.stack.pop()
        if(popped === this.minStack[this.minStack.length - 1]) {
             this.minStack.pop()
        }
        return popped
    }

    top() {
        return this.stack[this.stack.length - 1]
    }
    getMin() {
        return this.minStack[this.minStack.length - 1]
    }
}

const sl = new MinStack() 
sl.push(11)
sl.push(112)
sl.push(1123)
sl.push(11234)
console.log(sl.getMin())
sl.getMin()
