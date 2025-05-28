class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}

class SLL {
    constructor(){
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
        
        removeMiddle() {

            if(!this.head || !this.head.next) {
                this.head = null
                return
            }

            let fast = this.head
            let slow = this.head
            let prev = null;;

            while(fast && fast.next) {
                fast = fast.next.next
                prev = slow
                slow = slow.next
                
            }
          prev.next = slow.next
        }

}

const list = new SLL ()

list.append(11)
list.append(22)
list.append(33)
list.append(44)
list.print()
list.removeMiddle()
list.print()
