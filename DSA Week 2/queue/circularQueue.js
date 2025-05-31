

class Queue {
    constructor(c) {
        this.arr = new Array(c)
        this.capacity = c
        this.size = 0
        this.front = 0
    }

    getFront() {
        if(this.size ===0) return -1
        return this.arr[this.front]
    }

    getRear() {
        if(this.size === 0) return -1
        const rear = (this.front + this.size - 1) %  this.capacity
        return this.arr[rear]
    }
    enqueue(x) {
        if(this.size === this.capacity) return
        const rear = (this.front + this.size) % this.capacity
        this.arr[rear] = x
        this.size++
        return true
    }
    dequeue() {
        if(this.size === 0) return -1
        const res = this.arr[this.front]
        this.front = (this.front + 1) % this.capacity
        this.size--;
        return res
    }
}

const sl = new Queue(3)
console.log(sl.enqueue(11))
console.log(sl.enqueue(12))
console.log(sl.enqueue(13))
console.log(sl.dequeue())

