class Node  {
    constructor (data) {
        this.data = data
        this.next = null
    }
}

class SortedLinkedList {
    constructor() {
        this.head = null
    }

    append(data) {
        const newNode = new Node(data)

        if(!this.head || data < this.head.data) {
            newNode.next = this.head
            this.head = newNode
            return
        }



        let current = this.head

        while(current.next && current.next.data < data) {
            current = current.next
        }

        newNode.next = current.next
        current.next = newNode
    }

    printList() {
        let current = this.head
        let output = ''
        while (current) {
            output += current.data + ' ';
        current = current.next       
     }
     console.log(output + 'null')
    }
   
}

const list = new SortedLinkedList()

list.append(22)
list.append(34)
list.append(11)
list.printList()