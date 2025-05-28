class doublyNode {
    constructor(data) {
        this.data = data
        this.prev = null
        this.next = null
    }
}

class doublyLinkedList {
    constructor() {
        this.head = null
        this.tail = null
    }

    append(data) {
        const newNode = new doublyNode(data)

        if(!this.head) {
            this.head = this.tail = newNode
        } else {
            this.tail.next = newNode
            newNode.prev = this.tail
            this.tail = newNode

        }
    }

    prepend(data) {
        const newNode = new doublyNode(data)

        if(!this.head) {
            this.head =this.tail = newNode
        } else {
            newNode.next = this.head
            this.head.prev = newNode
            this.head = newNode
        }
    }

    printForward() {
        let current = this.head
        while(current) {
            console.log(current.data)
            current = current.next
        }
    }

    printBackward() {
        let current = this.tail
        while( current) {
            console.log(current.data)
            current = current.prev
        }
    }
}

const list = new doublyLinkedList()

list.append(10)
list.append(20)
list.append(30)
list.prepend(5)
list.append(33)
list.prepend(2)

list.printBackward()
list.printForward()