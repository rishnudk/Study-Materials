

class Node {
    constructor(data) {
        this.data = data
        this.left = null
        this.right = null
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    insert(data) {
        let newNode = new Node(data);
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

    countLeftNodes(node = this.root) {
        if (!node) return 0;

        let count = 0;
        if (node.left) {
            count += 1; // count this left child
            count += this.countLeftNodes(node.left); // recurse into left subtree
        }
        count += this.countLeftNodes(node.right); // still check right subtree

        return count;
    }
}

// Example usage:
let bst = new BST();
bst.insert(50);
bst.insert(30);
bst.insert(20);
bst.insert(40);
bst.insert(70);
bst.insert(60);
bst.insert(80);

console.log("Left child nodes count:", bst.countLeftNodes());  // Output: 3
