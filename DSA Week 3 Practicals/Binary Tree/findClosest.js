

class Node {
    constructor(data) {
        this.data = data
        this.left = null
        this.right = null
    }
}
function findClosest(root, target) {
    let close = root.data

    while(root !== null) {
        if(Math.abs(root.data - target) <Math.abs(close - target)) {
            close = root.data
        }
            if(target < root.data){
                root = root.left
            } else if(target > root.data) {
                root = root.right
            } else {
                return root.data
            }
    }
    return close
 }

 const root = new Node(10)
 root.left = new Node(5)
 root.right = new Node(15)
 root.left.left = new Node(2)
 root.left.right = new Node(7)
 root.right.left = new Node(12)
 root.right.right = new Node(17)

 console.log(findClosest(root,22))