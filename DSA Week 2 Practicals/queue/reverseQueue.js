function reverseQueue(queue) {
    let stack = [];

    while(queue.length > 0){
        stack.push(queue.shift())
    }

    while(stack.length > 0) {
        queue.push(stack.pop())
    }
    return queue
}


// let qss = [1,7, 2, 3, 4];
// reverseQueue(qss);       
console.log(reverseQueue([1,7, 2, 3, 4]));
