
class Node {
    constructor(data) {
        this.data = data
        this.nbr = []
    }
}

function bfsShortPath(start, target) {
    let queue = [[start, [start.data]]]
    let visited = new Set()

    while(queue.length > 0) {
        let [node, path] = queue.shift()
        if(node.data === target.data) return path

        visited.add(node)

        for(let nbr of node.nbr) {
            if(!visited.has(nbr)){
                queue.push([nbr, [...path, nbr.data]]) 
                    visited.add(nbr)
                }
            
        }
    }
    return null
}

let a = new Node(1)
let b = new Node(2)
let c = new Node(3)

a.nbr = [b,c]
b.nbr = [a,c]
c.nbr = [a,b]
console.log(bfsShortPath(a,b))