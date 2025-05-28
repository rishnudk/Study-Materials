function reverseQueue(queue) {
    let stack = [];

    // Step 1: Dequeue all elements into the stack
    while (queue.length > 0) {
        stack.push(queue.shift());
    }

    // Step 2: Push back all elements into the queue from the stack
    while (stack.length > 0) {
        queue.push(stack.pop());
    }

    return queue;
}


let q = [1, 2, 3, 4];
reverseQueue(q);       // q becomes [4, 3, 2, 1]
console.log(q);
