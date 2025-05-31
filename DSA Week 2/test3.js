

// class Stack{
//     constructor(){
//         this.queue = []
//     }
//     push(data) {
//         this.queue.push(data)
//         let size = this.queue.length
//         while(size > 1) {
//             this.queue.push(this.queue.shift())
//             size--
//         }
//     }
//     pop() {
//         if(this.isEmpty()) return null
//         return this.queue.shift()
//     }
//     isEmpty() {
//         return this.queue.length === 0
//     }

// }
// const sl = new Stack()
// sl.push(11)
// sl.push(12)
// sl.push(13)
// console.log(sl.pop())


class Node{
    constructor(data) {
        this.data = data
        this.next = null
    }
}
    class Stack{
        constructor() {
            this.top = null
            this.length = 0
        }
        push(data) {
            const newNode = new Node(data)
            newNode.next = this.top
            this.top = newNode
            this.length++

        }
        pop() {
            if(this.isEmpty()) return null;
            const popped = this.top.data
            this.top = this.top.next
            this.length--
            return popped
        }
        isEmpty() {
            return this.top === 0
        }
    }

    const sl = new Stack()
    sl.push(11)
    sl.push(12)
    sl.push(13)
    console.log(sl.pop())


