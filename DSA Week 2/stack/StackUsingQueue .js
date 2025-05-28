
class Stack{
    constructor(){
        this.queue = []
    } 
    push(data) {
        this.queue.push(data)
        let size  = this.queue.length

        while(size > 1) {
            this.queue.push(this.queue.shift())
            size--
        }

        
    }
    pop() {
        if(this.isEmpty()) return null
            return this.queue.shift()
        }
        top() {
            return this.queue[0]
        }
        isEmpty() {
            return this.queue.length === 0
        }
    
}

const sl = new Stack()
sl.push(11)
sl.push(22)
sl.push(33)
sl.push(44)
console.log(sl.pop())
console.log(sl.pop())
console.log(sl.pop())
console.log(sl.pop())
console.log(sl.isEmpty())