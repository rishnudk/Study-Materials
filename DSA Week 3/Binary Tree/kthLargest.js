

class Node {
    constructor(data) {
        this.data = data
        this.left = null
        this.right = null
    }

}
class BST{
    constructor() {
        this.root = null
    }
    insert (data) {

        let node =  new Node(data)

        if(!this.root) {
            this.root = new Node(data)
            return
        }

        let current = this.root
        while(true) {
            if(data < current.data) {
                if(!current.left) {
                    current.left = new Node(data)
                    return
                }
                current = current.left
            }  else {
                if(!current.right) {
                    current.right = new Node(data)
                    return
                }
                current = current.right
            }
        }

    }
    kth(k)  {
        let count = 0
        let result = null

        function rev(node) {
            if(!node || count >= k) {
                return false
            }
             rev(node.right)

             count++
             if(count === k) {
                result = node.data
                return
             }
             rev(node.left)
        }
        rev(this.root)
        return result
    }
}

const bt = new BST()

bt.insert(2)
bt.insert(22)
bt.insert(21)
bt.insert(25)
bt.insert(28)
bt.insert(289)

console.log(bt.kth(2))