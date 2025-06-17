




class Node {
    constructor(data) {
        this.data = data
        this.left = null
        this.right = null
        
    }
}

class BST {
    constructor() {
        this.root = null
    }
    insert(data) {
        const newNode = new Node(data) 
        
        if (!this.root) {
            this.root = newNode
            return
        }
        
        let current = this.root
        while(true) {
            if(data < current.data) {
                if(!current.left) {
                    current.left = newNode
                    return
                }
            
                current = current.left
            } else {
                if(!current.right) {
                    current.right = newNode
                    return
                }
                current = current.right
            }
            
        }
    }
    preorder(node) {
        if(node === null) return 
        console.log(node.data)
        this.preorder(node.left)
        this.preorder(node.right)
    }

    search (node ,data) {
        
        if(node === null) return false
        if(node.data === data) return true
        
        if(node.data > data) {
            return  this.search(node.left, data)
        } else {
            return this.search(node.right, data)
        }
    } 
}

function deleteNode(root, key) {

    if(root === null) return null

    if(key < root.data) {
        root.left = deleteNode(root.left, key)
    } else if(kay > root.data) {
        root.right = deleteNode(root.right, key)
    } else {
        ifl
    }

}
    
    

const bt = new BST()

bt.insert(50)
bt.insert(20)
bt.insert(30)
bt.insert(33)
bt.insert(11)
bt.insert(12)
bt.insert(22)
bt.preorder(bt.root)

console.log(bt.search(bt.root, 22))







