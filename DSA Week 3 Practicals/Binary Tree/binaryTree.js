

class Node{
    constructor(data) {
        this.data  = data
        this.left = null
        this.right = null 
    }
}

 class BinaryTree{
    constructor() {
        this.root = null
    }
    addRoot(data) {
        this.root = new Node(data)
    }
    addLeft(parent, data) {
        parent.left = new Node(data)
    }
    addRight(parent, data) {
        parent.right = new Node(data)
    }

    preorder(node) {
        if(node === null) return
        console.log(node.data)
            this.preorder(node.left)
             this.preorder(node.right)
    }

    isBalanced(node = this.root) {
        function check(node) {
            if(node === null) return 0

            const left = check(node.left)
            if(left === -1) return -1

            const right = check(node.right)
            if(right === -1) return -1

            if(Math.abs(left - right) > 1) return -1
             return Math.max(left , right) +1
        }
        return check(node) !== -1
    }
 }

 const bt = new BinaryTree() 
 bt.addRoot(1)
 bt.addLeft(bt.root, 2)
 bt.addRight(bt.root, 3)
 bt.addLeft(bt.root.left, 455) 
 bt.addRight(bt.root.left, 16)
 bt.preorder(bt.root)
 
 console.log(bt.isBalanced())