
class Node {
    constructor(data) {
        this.data = data
        this.next = null
        this.prev = null
    }
}
class DLL {
    constructor() {
        this.head = null
        this.tail = null
        
    }

    append(data) {
        const newNode = new Node(data)

        if(!this.head) {
            this.head = this.tail = newNode
            return
        }

        this.tail.next = newNode
        newNode.prev = this.tail
        this.tail = newNode
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
        let current  = this.head
        let temp = null

        while(current) {
            temp = current.prev
            current.prev = current.next
            current.next = temp
            current = current.prev



        }
        if(temp) {
            this.tail = this.head
            this.head = temp.prev
        }
     }
}

const list = new DLL()
list.append(11)
list.append(22)
list.append(33)
list.append(44)
list.print()
list.reverse()
list.print()