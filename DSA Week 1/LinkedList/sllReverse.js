
class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}

class SLL {
    constructor() {
        this.head = null
    }

    append(data) {
        const newNode = new Node(data)

        if(!this.head) {
            this.head = newNode
            return
        }

        let current = this.head
        while(current.next) {
            current = current.next
        }
        current.next = newNode
    }
    print() {
        let current = this.head
        let result = ''

        while(current) {
            result = result + current.data + ' '
            current = current.next

        }
        console.log(result)
    }
    reverse() {

        let current = this.head
        let prev = null
        let next = null

        while(current) {
            next = current.next
            current.next = prev
            prev = current
            current = next

        }
        this.head = prev
    }
}

const list = new SLL()

list.append(11)
list.append(22)
list.append(33)
list.append(44)
list.print()
list.reverse()
list.print()