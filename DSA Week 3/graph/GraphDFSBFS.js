
class Graph {
    constructor() {
        this.adjList = {}
    }
    addVertex(vertex) {
        if(!this.adjList[vertex]) {
            this.adjList[vertex] = []
        }
    }

    addEdge(vertex1,vertex2) {
        this.addVertex(vertex1)
        this.addVertex(vertex2)
        this.adjList[vertex1].push(vertex2)
        this.adjList[vertex2].push(vertex1)
    }
    print() {
        for(let vertex in this.adjList) {
            console.log(`${vertex} => ${this.adjList[vertex].join(', ')}`)
        }
    }

    bfs(start) {
        const visited = new Set()
        const queue = [start]
        visited.add(start)

        while(queue.length > 0) {
            const vertex = queue.shift()
            console.log(vertex)

            for(let nei of this.adjList[vertex]) {
                if(!visited.has(nei)) {
                    visited.add(nei)
                    queue.push(nei)
                }
            }
        }
    }
    dfs(start, visited = new Set()) {
        console.log(start)
        visited.add(start)

        for(let nei of this.adjList[start]) {
            if(!visited.has(nei)){
                this.dfs(nei, visited)
            }
        }
    }
}

const g = new Graph()
g.addEdge('A', 'B')
g.addEdge('A', 'C')
g.addEdge('B', 'D')
g.addEdge('C', 'D') 

g.print() 

g.bfs('A')
console.log(' ')   
g.dfs('A') 