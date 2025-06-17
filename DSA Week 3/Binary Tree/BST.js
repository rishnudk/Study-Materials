
class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    insert(data) {
        const newNode = new Node(data);

        if (!this.root) {
            this.root = newNode;
            return;
        }

        let current = this.root;
        while (true) {
            if (data < current.data) {
                if (!current.left) {
                    current.left = newNode;
                    return;
                }
                current = current.left;
            } else {
                if (!current.right) {
                    current.right = newNode;
                    return;
                }
                current = current.right;
            }
        }
    }

    preorder(node) {
        if (node === null) return;
        console.log(node.data);
        this.preorder(node.left);
        this.preorder(node.right);
    }

    // search(data) {
    //     let current = this.root;

    //     while (current !== null) {
    //         if (data === current.data) {
    //             return true;
    //         } else if (data < current.data) {
    //             current = current.left;
    //         } else {
    //             current = current.right;
    //         }
    //     }

    //     return false;
    // }


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

const bt = new BST();

bt.insert(50);
bt.insert(20);
bt.insert(30);
bt.insert(33);
bt.insert(11);
bt.insert(12);
bt.insert(22);

console.log("Preorder:");
bt.preorder(bt.root); // 50 20 11 12 30 22 33

console.log( bt.search( bt.root, 33)); // true
console.log("Search 15:", bt.search(bt.root, 15)); // false

