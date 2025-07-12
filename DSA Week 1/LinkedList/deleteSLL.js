

class Node {
    constructor(data){
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

    delete(data) { 

        if(!this.head) return

        if(this.head.data === data) {
            this.head = this.head.next
            return
        }

        let current = this.head
        while(current.next  && current.next.data !== data) {
            current = current.next
        }

        if(current.next) {
            current.next = current.next.next
        }
    }
}

const list = new SLL()
list.append(11)
list.append(22)
list.append(33)
list.delete(22)
list.print()