class Node {
    constructor(data) {
        this.data = data
        this.nbr = []
    }
}

function cloneGraph(node, visited = new Map()) {

    if(!node) return null

    if(visited.has(node)) return visited.get(node)

        const clone = new Node(node.data)
        visited.set(node, clone)

        for(let nbr of node.nbr) {
            clone.nbr.push(cloneGraph(nbr, visited))
        }
        return clone
}

const a = new Node(1)
const b = new Node(2)
const c = new Node(3)

a.nbr = [b,c]
b.nbr = [a,c]
c.nbr = [a,b]

let cloned = cloneGraph(c)
console.log(cloned)