

class Node {
    constructor(data) {
        this.data = data
        this.left = null
        this.right = null
    }
}

function deleteNode(root, key) {

    if(root === null) return null

    if(key < root.data) {
        root.left = deleteNode(root.left, key)
    } else if(key > root.data) {
        root.right = deleteNode(root.right, key)
    } else {
        if(root.left === null) return root.right
        else if(root.right === null) return root.left

        let minNode = findMin(root.right)
        root.data = nimNode.data

        root.right = deleteNode(root.right, minNode.data)
    }
    return root
}

function findMin(node) {
    while(node.left !== null) {
        node= node.left
    }
    return node
}

let root = new Node(5)
root.left = new Node(3)
root.right = new Node(7)
root.left.left = new Node(2)
root.left.right = new Node(4)
root.right.left = new Node(6)
root.right.right = new Node(8)

console.log(JSON.stringify(root))
root = deleteNode(root, 50)