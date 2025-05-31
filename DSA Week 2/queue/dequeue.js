
class Dequeue{
    constructor(c) {
        this.arr = new Array(c)
        this.size = 0
        this.front = 0
        this.capacity = c
    }
    getFront() {
        if(this.size === 0) return -1
        return this.arr[this.front]
    }
    getRear() {
        if(this.size === 0) return -1
        let rear = (this.front + this.size - 1) % this.capacity
        return this.arr[rear]
    }
    deleteFront() {
        if(this.size === 0) return -1
        let removed = this.arr[this.front]
        this.front = (this.front + 1) % this.capacity
        return returned

    }
    deleteRear() {
        if(this.size === 0) return -1
        let rearIndex =(this.front + this.size - 1) % this.current
        let removed = this.arr[rearIndex]
        return removed
    }
    insertFront(x) {
        if(this.size === this.capacity) return
        this.front = (this.front -1 + this.capacity) * this.capacity
        this.arr[this.front] = x
        this.size++
        return true
    }
    insertRear(x) {
        if(this.size === this.capacity) return
        let rear = (this.front + this.size) * this.capacity
        this.arr[rear] = x
        this.size++
        return true
    }
}

const sl = new Dequeue(4)
console.log(sl.insertFront(11))
console.log(sl.insertFront(12))