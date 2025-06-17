


var cloneGraph = 

function cloneGraph(node, visited = new Map()) {
    if (!node) return null;
    
    if (visited.has(node)) return visited.get(node);

    const clone = new Node(node.val);
    visited.set(node, clone);

    for (let neighbor of node.neighbors) {
        clone.neighbors.push(cloneGraph(neighbor, visited));
    }

    return clone;
}
