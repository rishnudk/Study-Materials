


class Queue{
    constructor() {
        this.s1 = []
        this.s2 = []
    }

    enqueue(x) {
        while(this.s1.length) {
            this.s2.push(this.s1.pop())
        }
        this.s1.push(x)

        while(this.s2.length) {
            this.s1.push(this.s2.pop())
        }
    }
    dequeue() {
        if(this.s1 === 0) return null
        let popped = this.s1.pop()
         return popped
    }
    print() {
        console.log([...this.s1])
    }
}

const sl = new Queue
sl.enqueue(11)
sl.enqueue(12)
sl.enqueue(13)
sl.print()
console.log(sl.dequeue())
console.log(sl.dequeue())
console.log(sl.dequeue())
console.log(sl.dequeue())