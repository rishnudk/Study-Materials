class listNode {
    constructor(data) {
        this.data = data
        this.next = null

    }
}

function arrayToLinkedList(arr) {
if(arr.length === 0) return null
let head = new listNode(arr[0])
    let current = head

    for( let i=1; i<arr.length;i++){
        current.next = new listNode(arr[i])
        current = current.next
    }
    return head

}

function middle(head) {
    let slow = head
    let fast = head

    while(fast !== null && fast.next !==null){
        slow = slow.next
        fast = fast.next.next
    }

    return slow
}


const head = arrayToLinkedList([1,2,3,4,5])
const middleData = middle(head)
console.log(middleData.data)