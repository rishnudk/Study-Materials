

class Node {
    constructor(data) {
        this.data = data
        this.left = null
        this.right = null
    }
}

function findMax(root) {
    if(root === null) {
        return null;
    }
    if(root.left === null) {
        return root.data
    }

    return findMax(root.left)
}

let root = new Node(20)
root.left = new Node(10)
root.right = new Node(30)
root.right.right = new Node(40)
root.right.right.right = new Node(50)

console.log(findMax(root))