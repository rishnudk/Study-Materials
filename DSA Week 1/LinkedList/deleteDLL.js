class Node{
    constructor(data){
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

    delete(data){
        let current = this.head

        while(current) {
            if(current.data === data) {
                if(current.prev) current.prev.next = current.next
                else this.head = current.next

                if(current.next) current.next.prev = current.prev
                else this.tail = current.prev
                return
            }
            current = current.next
        }
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
}

const list = new DLL()
list.append(11)
list.append(22)
list.append(33)
list.append(44)
list.print()
list.delete(22)
list.print()