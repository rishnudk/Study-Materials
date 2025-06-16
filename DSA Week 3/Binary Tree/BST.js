
class Node{
    constructor(data) {
        this.data = data
        this.left = null
        this.right = null
    }
}

class BST {
    constructor () {
        this.root = null
    }
    isEmpty() {
        return this.root === null
    }
    insert(data) {
        const newNode = new Node(data)
        if(this.isEmpty()) {
            this.root = newNode
        }else {
            this.insertNode(this.root, newNode)
        }


    }
    insertNode(root, newNode) {
        if(newNode.data < root.data) {
            if(root.left === null) {
                root.left = newNode
            }else {
                this.insertNode(root.left, newNode)
            }
        } else {
            if(root.right === null) { 
                root.right = newNode
            } else {
                this.insertNode(root.right, newNode)
            }
        }
    }
    search( root, data) {
        if(!root) {
            return false
        } else {
            if(root.data === data) {
                return true
            } else if(data < root.data) {
                return this.search(root.left, data)
            }
            else {
                return this.search(root.rigth, data)
            }
        }
    }
    preOrder(root) {
        if(root) {
            console.log(root.data)
            this.preOrder(root.left)
            this.preOrder(root.right)
        }

    }
    inOrder(root) {
        if(root) {
            this.inOrder(root.left)
            console.log(root.data)
            this.inOrder(root.right)
        }
    }
    postOrder(root) {
        if(root) {
            this.postOrder(root.left)
            this.postOrder(root.right)
            console.log(root.data)
        }
    }

    levelOrder() {
        const queue = []
        queue.push(this.root)
        while(queue.length) {
            let curr =  queue.shift()
            console.log(curr.data)
            if(curr.left) {
                queue.push(curr.left)
            } if(curr.right) {
                queue.push(curr.right)
            }
        }
    }

    min(root) {
        if(!root.left) {
            return root.data
        } else {
            return this.min(root.left)
        }
    } max(root) {
        if(!root.right) return root.data
        else return this.max(root.right)
    }
}

const bt  = new BST() 
bt.insert(50)
bt.insert(20)
bt.insert(30)
bt.insert(33)
bt.insert(11)
bt.insert(12)
bt.insert(22)
console.log(bt.search(bt.root, 50))
console.log(bt.search(bt.root, 20))
console.log(bt.search(bt.root, 40))


console.log(bt.min(bt.root))
console.log(bt.max(bt.root))