

class Node {
    constructor() {
        this.children = {}
        this.end = false
    }
}

class Trie {
    constructor() {
        this.root = new Node()
    }
    insert(word) {
        let node = this.root

        for(let char of word) {
            if(!node.children[char]) {
                node.children[char] = new Node()
            }
            node = node.children[char]
        }
        node.end = true
    }
    search(word) {
        let node = this.root
        for(let char of word) {
            if(!node.children[char]) return false
            node = node.children[char]
           
        }
        return node.end
    }
    searchChar(prefix) {
        let node = this.root

        for(let char of prefix) {
            if(!node.children[char]) return false
            node = node.children[char]
        }
        return true
    }

    auto(prefix) {
        let node = this.root

        for(let char of prefix) {
            if(!node.children[char]) return []
            node = node.children[char]
        }

        let suggest = []
        function dfs(currNode,path) {
            if(currNode.end) {
                suggest.push(path)
            }

            for(let char in currNode.children) {
                dfs(currNode.children[char], path + char)
            }
        }
        dfs(node, prefix)
        return suggest

    }
}

const t = new Trie()
t.insert('cat')
t.insert('cot')
t.insert('can')
t.insert('bag')

console.log(t.search('cat'))
console.log(t.searchChar('c'))

console.log(t.auto('ca'))