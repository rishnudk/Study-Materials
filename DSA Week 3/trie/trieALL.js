

class Node {
    constructor() {
        this.children = {}
        this.isEndOfWord = false
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
        node.isEndOfWord = true
    }
    search(word) {
        let node = this.root
        for(let char of word) {
            if(!node.children[char]) return false
            node = node.children[char]
        }
        return node.isEndOfWord
    }

    startsWith(prefix) {
        let node = this.root

        for(let char of prefix) {
            if(!node.children[char]) return false 
            node = node.children[char]

        }
        return true
    }
    longestPrefix(word) {
        let node = this.root
        let prefix = ''

        for(let char of word) {
            if(node.children[char]) {
                prefix = prefix + char
                node = node.children[char] 
            } else break
        }
        return prefix  
    }
}

const t = new Trie()
t.insert('cath') 
t.insert('cam')  
console.log(t.search('cat'))
console.log(t.startsWith('cdd'))     
   
console.log(t.longestPrefix('cathh')) 