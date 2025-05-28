

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

  removeDup () {
    if(!this.head) return

    let current =this.head
    let prev = null
    let seen = new Set()

    while(current) {
        if(seen.has(current.data)) {
            prev.next = current.next
        }
        else {
            seen.add(current.data)
            prev = current
        }
        current = current.next
    }
  }
   


}

const list = new SLL()
list.append(11)
list.append(22)
list.append(22)
list.append(22)
list.append(33)
list.removeDup()
list.print()