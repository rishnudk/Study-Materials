

class listNode {
    constructor(data) {
        this.data = data
        this.next = null
    }
}

function arrayToLinledList(arr) {
    if(arr.length === 0 ) return null
    const head = new listNode(arr[0])
    let current = head

    for(let i =1 ; i<arr.length; i++) {
        current.next = new listNode(arr[i])
        current = current.next
    }
    return head
}

let head = arrayToLinledList([1,2,3,4])

let node = head 
while(node) {
    console.log(node.data)
    node = node.next
}