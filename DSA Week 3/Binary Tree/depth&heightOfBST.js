

class Node {
    constructor(data) {
        this.data= data
        this.left = null 
        this.right = null
    }
}

 class BST{
    constructor() {
        this.root = null
    }

    insert(data) {
        const newNode = new Node(data)
        if(!this.root) {
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
            }
            else {
                if(!current.right) {
                    current.right = newNode
                    return
                }
                current = current.right
            }

        }
    }

    findDepth(target) {
        let depth = 0
        let current = this.root

        while(current !== null) {
            if(target === current.data) return depth
            current = target < current.data ? current.left : current.right
            depth++
        }
        return -1
    }

    findHeightOfNode(node) {
        if(!node) return -1
        return 1 + Math.max(
            this.findHeightOfNode(node.left),
            this.findHeightOfNode(node.right)
        )
    }

    getTreeHeight() {
        return this.findHeightOfNode(this.root)
    }
 }

 const bt = new BST();
 [1,2,3,4,5,6,7,8,9].forEach(data => bt.insert(data));

 
 console.log(bt.findDepth(2));
 console.log(bt.getTreeHeight())