

// class Node{
//     constructor(data) {
//         this.data = data
//         this.next = null
//     }
// }


// function check(head) {
//     let slow = head
//     let fast = head

//     while (fast && fast.next) {
//         slow = slow.next
//         fast = fast.next.next

//         if(slow === fast) {
//             return true
//         }

//     }
//     return false
// }

// let head = new Node(1)
// let second = new Node(2)
// let third = new Node(3)
// let fourth = new Node(4)

// head.next = second
// second.next = third
// third.next = fourth

// fourth.next = head

// console.log('checking', check(head))



class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}



function check(head) {
    if(!head) return 

    let slow = head
    let fast = head
    let cll = false

    while (fast && fast.next) {
        slow = slow.next
        fast = fast.next.next

        if(slow === fast) {
            cll = true;
            break;
        }}

        if(!cll) {
            let current = head
            while (current.next !== null) {
                current = current.next
                
            }
            current.next = head
            console.log('now the lsit is circular')
        } else {
            console.log('already CLL')
        }
}

let head = new Node(1)
let second = new Node(2)
let third = new Node(3)
let fourth = new Node(4)

    head.next = second
    second.next = third
    third.next = fourth


   check(head)