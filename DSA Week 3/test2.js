

// class Node {
//     constructor() {
//         this.children = {}
//         this.end = false
//     }
// }
// class Trie {
//     constructor() {
//         this.root = new Node()

//     }
    
//     insert(word) {
//         let node =  this.root

//         for (let char of word) {
//             if(!node.children[char]) {
//                 node.children[char] = new Node()
//             }
//            node = node.children[char] 
//         }
//         node.end = true
//     }
//     search(word) {
//         let node =  this.root

//         for(let char of word) {
//             if(!node.children[char])  return false
//             node  = node.children[char]
//         }
//         return node.end
//     }
//     searchLtr(prefix) {
//         let node =  this.root

//         for(let char of prefix) {
//             if(!node.children[char]) return false
//             node = node.children[char]
//         }
//         return true

//     }
//     largest(word) {
//         let node =  this.root
//         let prefix = ''

//         for(let char of word) {
//             if(node.children[char] ) {
//                 prefix = prefix + char
//                 node = node.children[char]
//             }
//         }
//         return prefix
//     }

//    auto(word) {
//     let node = this.root

//     for(let char of word) {
//         if(!node.children[char]) return []
//         node = node.children[char]
//     }

//     let suggest = []
//     function dfs(currNode, path) {
//         if(currNode.end) {
//             suggest.push(path)
//         }
//         for(let char in currNode.children) {
//             dfs(currNode.children[char] ,path + char)
//         }
//     }
//     dfs (node, word)
//     return suggest
//    }
// }
// const t = new Trie()
// t.insert('cat')
// t.insert('car')
// t.insert('cod')
// console.log(t.search('cat'))
// console.log(t.auto('ca'))






// function heapify(arr, n , i) {
//     let largest = i
//     let left = 2 * i +1
//     let right = 2 * i+2

//     if(left < n && arr[left]> arr[largest]) {
//         largest = left
//     } 
//     if(right < n && arr[right] > arr[largest]) {
//         largest = right
//     } 
//     if(largest !== i) {
//         let temp = arr[i] 
//         arr[i] = arr[largest] 
//         arr[largest] = temp
//         heapify(arr, n, largest)
//     }
// }

// function heapsort(arr) {

//     let n = arr.length

//     for(let i = Math.floor(n/2) - 1; i >=0;i--) {
//         heapify(arr, n, i)
//     }

//     for(let i=n-1; i> 0;i--) {
//         let temp = arr[0]
//         arr[0] = arr[i]
//         arr[i] = temp
//         heapify(arr, i,0)
//     }
//     return arr
// }

// let arr= [2,88,3,7,9,11]
// heapsort(arr)
// console.log(arr)



// function heapify(arr, n, i) {

//     let smallest = i
//     let left = 2 * i + 1
//     let right = 2 * i + 2

//     if(left < n && arr[left] < arr[smallest]) {
//         smallest = left
//     }

//     if(right < n && arr[right] < arr[smallest]) {
//         smallest = right
//     }
//     if(smallest !== i) {
//         let temp = arr[i] 
//         arr[i] = arr[smallest]
//         arr[smallest] = temp
//         heapify(arr, n, smallest)
//     }

// }

// function heapsort(arr) {
//     let n = arr.length

//     for(let i=Math.floor(n/2)-1; i>=0;i--) {
//         heapify(arr, n, i)
//     }

//     for(let i=n-1; i>0;i--) {

//         let temp = arr[0]
//         arr[0] = arr[i]
//         arr[i] = temp
//         heapify(arr, i, 0)
//     }
//     return arr
// }

// let arr = [8,5,11,4,2]
// heapsort(arr)
// console.log(arr)




// class Node{
//     constructor(data) {
//         this.data= data
//         this.left = null
//         this.right = null
//     }
// }
// class BT {
//     constructor() {
//         this.root = null
//     }

//     addRoot(data) {
//         this.root = new Node(data) 

//     }
//     addLeft(parent, data) {
//         parent.left = new Node(data)
//     }
//     addright(parent, data) {
//         parent.right = new Node(data)
//     }
//     preorder(node) {
//         if(node === null) return

//         console.log(node.data)
//         this.preorder(node.left)
//         this.preorder(node.right)
//     }
//     inorder(node) {
//         if(node === null) return

//         this.inorder(node.left)
//         console.log(node.data)
//         this.inorder(node.right)
//     }
//     postorder(node) {
//         if(node === null) return
//         this.postorder(node.left)
//         this.postorder(node.right)
//         console.log(node.data)
//     }
//     isbalance(node =this.root) {
//         function check(node) {
//             if(node === null) return 0

//             let left = check(node.left)
//             if(left === -1) return -1

//             let right = check(node.right)
//             if(right === -1) return -1

//             if(Math.abs(left - right) > 1)  return -1
//             return Math.max(left, right) +1
//         }
//         return check (node) !== -1
//      }
// }

// const bt = new BT()
// bt.addRoot(5)
// bt.addLeft(bt.root, 3)
// bt.addright(bt.root, 7)
// bt.preorder(bt.root)
// bt.inorder(bt.root)
// bt.postorder(bt.root)

// console.log(bt.isbalance())



class Node {
    constructor(data) {
        this.left = null;
        this.right = null;
        this.data = data;
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

    second() {
        let result = null;
        let count = 0;

        function rev(node) {
            if (!node || count >= 2) return;
            rev(node.right);
            count++;
            if (count === 2) {
                result = node.data;
                return;
            }
            rev(node.left);
        }

        rev(this.root);
        return result;
    }

    inorder(node = this.root) {
        if (!node) return;
        this.inorder(node.left);
        console.log(node.data);
        this.inorder(node.right);
    }
}

// ✅ Correct helper function for minimum node (outside del)
function findMin(node) {
    while (node.left !== null) {
        node = node.left;
    }
    return node;
}

// ✅ Correct delete function
function del(root, key) {
    if (root === null) return null;

    if (key < root.data) {
        root.left = del(root.left, key);
    } else if (key > root.data) {
        root.right = del(root.right, key);
    } else {
        if (root.left === null) return root.right;
        if (root.right === null) return root.left;

        let minNode = findMin(root.right);
        root.data = minNode.data;
        root.right = del(root.right, minNode.data);
    }

    return root;
}

// ✅ Test
const bt = new BST();
bt.insert(55);
bt.insert(57);
bt.insert(58);
bt.insert(59);
bt.insert(11);

console.log("Second largest:", bt.second());

bt.root = del(bt.root, 59);

console.log("Inorder after deletion:");
bt.inorder(bt.root);
