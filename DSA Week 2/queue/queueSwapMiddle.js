class Queue{
    constructor() {
        this.queue = []
    }
    enqueue(data) {
        this.queue.push(data)
    }
    swap() {
        let mid1 = Math.floor(this.queue.length / 2)
        let mid2 = mid1 - 1

        let temp = this.queue[mid1]
        this.queue[mid1] = this.queue[mid2] 
        this.queue[mid2] = temp
    }
    print() {
        console.log([...this.queue]) 
    }
}
const sl = new Queue() 
sl.enqueue(11)
sl.enqueue(22)
sl.enqueue(33)
sl.enqueue(44)
sl.enqueue(55)
sl.print()
sl.swap()
sl.print()
