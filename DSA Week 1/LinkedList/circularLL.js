class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}

class CircularLinkedList {
    constructor() {
        this.head = null
    }

    append(data) {
        const newNode = new Node(data)

        if(!this.head) {
            this.head = newNode
            newNode.next = this.head
        } else {
            let current = this.head

            while (current.next !== this.head) { 
            current = current.next

            }
            current.next = newNode
            newNode.next = this.head
        }
    }

    printList(count = 10) {
        if(!this.head) return 
        let current = this.head
        let printed = 0

        do{
            console.log(current.data)
            current = current.next
            printed++
        } while (current !== this.head && printed < count)
    }
}

const cll = new CircularLinkedList()

cll.append(11)
cll.append(22)
cll.append(33)
cll.append(44)

cll.printList()