

const graph = {
    'A': ['B', 'C'],
    'B': ['A', 'D', 'E'],
    'C': ['A', 'F'],
    'D': ['B'],
    'E': ['B', 'F'],
    'F': ['C', 'E']
};


function dfs(graph, start, visited = new Set()) {
    if (visited.has(start)) return;
    
    console.log(start); // process node
    visited.add(start);
    
    for (let neighbor of graph[start]) {
        dfs(graph, neighbor, visited);
    }
}



function bfs(graph, start) {
    const visited = new Set();
    const queue = [start];

    while (queue.length > 0) {
        const node = queue.shift();

        if (!visited.has(node)) {
            console.log(node); // process node
            visited.add(node);

            for (let neighbor of graph[node]) {
                if (!visited.has(neighbor)) {
                    queue.push(neighbor);
                }
            }
        }
    }
}


console.log("DFS:");
dfs(graph, 'A');

console.log("BFS:");
bfs(graph, 'A');
