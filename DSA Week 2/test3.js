

// class Stack{
//     constructor(){
//         this.queue = []
//     }
//     push(data) {
//         this.queue.push(data)
//         let size = this.queue.length
//         while(size > 1) {
//             this.queue.push(this.queue.shift())
//             size--
//         }
//     }
//     pop() {
//         if(this.isEmpty()) return null
//         return this.queue.shift()
//     }
//     isEmpty() {
//         return this.queue.length === 0
//     }

// }
// const sl = new Stack()
// sl.push(11)
// sl.push(12)
// sl.push(13)
// console.log(sl.pop())


// class Node{
//     constructor(data) {
//         this.data = data
//         this.next = null
//     }
// }
//     class Stack{
//         constructor() {
//             this.top = null
//             this.length = 0
//         }
//         push(data) {
//             const newNode = new Node(data)
//             newNode.next = this.top
//             this.top = newNode
//             this.length++

//         }
//         pop() {
//             if(this.isEmpty()) return null;
//             const popped = this.top.data
//             this.top = this.top.next
//             this.length--
//             return popped
//         }
//         isEmpty() {
//             return this.top === 0
//         }
//     }

//     const sl = new Stack()
//     sl.push(11)
//     sl.push(12)
//     sl.push(13)
//     console.log(sl.pop())




// function reverseStack(stack) {
//     if (stack.length === 0) return;

//     // Step 1: Pop the top
//     let top = stack.pop();

//     // Step 2: Reverse the rest of the stack
//     reverseStack(stack);

//     // Step 3: Push current element to the bottom
//     insertAtBottom(stack, top);
// }

// function insertAtBottom(stack, item) {
//     if (stack.length === 0) {
//         stack.push(item);
//         return;
//     }

//     let top = stack.pop();
//     insertAtBottom(stack, item);
//     stack.push(top);
// }


// let stack = [1,2,3,4]
// reverseStack(stack)
// console.log(stack)



// function reverse(stack) {

//     if(stack.length === 0) return

//    let  top = stack.pop()
//     reverse(stack)

//     insertAtBottom(stack, top)
// } 
// function insertAtBottom(stack, item) {

//     if(stack.length === 0) {
//         stack.push(item)
//         return
//     }
//    let top = stack.pop()
//     insertAtBottom(stack, item)

//     stack.push(top)
// }

// let a = [1,2,3,4]
// reverse(a)
// console.log(a)


// function reverse(stack) {

//     if(stack.length === 0) return

//     let top = stack.pop()
//     reverse(stack)
    
//     insertAtBottom(stack, top)
// }

// function insertAtBottom(stack, item) {
//     if(stack.length === 0) {
//         stack.push(item)
//         return
//     }

//     let top = stack.pop()
//     insertAtBottom(stack, item)
//     stack.push(top)
// }

// let s = [1,2,3,4]
// reverse(s)
// console.log(s)



// class HashTable{
//     constructor(size = 10) {
//         this.size = size
//         this.count = 0
//         this.table = new Array(this.size).fill(null)
//         this.loadFactor = 0.75
//     }
//     hash1(key) {
//         let hash = 0
//         for(let i=0;i<key.length;i++) {
//             hash = hash + key.charCodeAt(i)
//             return hash % this.size
//         }
//     }
//     hash2(key) {
//         let hash = 0
//         for(let i=0;i<key.length;i++) {
//             hash = hash + key.charCodeAt(i)
//             return 7 - (hash % 7)
//         }
//     }

//     set(key, value) {
//         if(this.count / this.size > this.loadFactor) {
//             this.rehash()
//         }

//         let index = this.hash1(key)
//         let step  = this.hash2(key)
//         let i = 0

//         while(this.table[index] !== null && this.table[index].key !== key  ) {
//             index = (this.hash1(key) + i* this.hash2(key)) % this.size
//             i++
//         }
//         if(this.table[index] === null) {
//             this.count++
//         }
//         this.table[index] = {key , value}




//     }

//     rehash() {

//         let oldTable = this.table
//         this.count = 0
//         this.table = new Array(this.size).fill(null)
        
//         for(let bucket of oldTable) {
//             for(let [key, value] of bucket) {
//                 this.set({key, value})
//             }
//         }
//     }
//     print() {
//         for(let i=0;i<this.table.length;i++) {
//             if(this.table[i]) {
//                 console.log(  i , this.table[i])
//             }
//         }
//     }
// }

// const sl = new HashTable(10)
// sl.set('name' , 'rishnu')
// sl.set('age' , 22)
// sl.set('place' , 'knr')
// sl.print()




// class HashTable{
//     constructor(size = 10) {
//         this.size = size
//         this.count = 0
//         this.loadFactor = 0.75
//         this.table =  Array.from({length : size} , () => [])
//     }

//     hash(key) {
//         let hash = 0
//         for(let i=0;i<key.length;i++) {
//             hash = hash + key.charCodeAt(i)
//         } 
//                     return hash % this.size

//     }

//     set(key, value) {

//         let index = this.hash(key)
//         let bucket = this.table[index]

//         for(let i=0;i<bucket.length;i++) {
//             if(bucket[i][0] === key) {
//                 bucket[i][1] = value
//                 return
//             }
//         }
//         bucket.push([key, value])
//         this.count++

//         if(this.count / this.size > this.loadFactor) {
//             this.rehash()
//         }
//     }

//     rehash () {
//         let oldTable = this.table
//         this.size *= 2
//         this.count = 0
//         this.table = Array.from({length:this.size} , () => [])


//         for(let x of oldTable) {
//             for(let [key, value]  of x) {
//                 this.set(key, value)
//             }
//         }

//     }

//     print() {
//         for(let i=0;i<this.table.length;i++) {
//             if(this.table[i]) {
//                 console.log( i , this.table[i])
//             }
//         }
//     }
// }

// const sl = new HashTable(10)
// sl.set('name' , 'rishnu')
// sl.set('nwwame' , 'rishnu')
// sl.set('naddme' , 'rishnu')
// sl.set('naaaame' , 'rishnu')
// sl.print()


// function mergeSort(arr) {

//     if(arr.length <= 1) return arr

//     let mid =Math.floor(arr.length / 2)
//     let rigth = mergeSort(arr.slice(0, mid))
//     let left = mergeSort(arr.slice(mid))
//     let result = ''
//     let i=0, j=0

//     while(i<left.length && j< rigth.length) {
//         if(left[i] < rigth[j]) {
//         result = result + left[i]
//             i++
//         } else {
//             result = result + rigth[j]
//             j++
//         }
//     }
//     return result.concat(left.slice(i)).concat(rigth.slice(j))

// }
// console.log(mergeSort('hello'))

function quickSort(arr) {

    if(arr.length <= 1) return arr

    let pivot = arr[arr.length -1]
    let left = ''
    let rigth = ''

    for(let i=0;i<arr.length - 1;i++) {
        if(arr[i] < pivot) {
left = left + arr[i]            
        } else {
            rigth = rigth + arr[i]
        }
    }
    return [...quickSort(left), pivot , ...quickSort(rigth)]

}
 console.log(quickSort('hello'))