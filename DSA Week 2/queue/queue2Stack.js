class QueueUsingStack {
    constructor() {
        this.stack1 = [];
        this.stack2 = [];
    }

    // Enqueue: push into stack1
    enqueue(value) {
        this.stack1.push(value);
    }

    // Dequeue: move elements to stack2 if empty, then pop
    dequeue() {
        if (this.isEmpty()) {
            console.log("Queue is empty");
            return;
        }

        if (this.stack2.length === 0) {
            while (this.stack1.length > 0) {
                this.stack2.push(this.stack1.pop());
            }
        }

        return this.stack2.pop();
    }

    // Check if both stacks are empty
    isEmpty() {
        return this.stack1.length === 0 && this.stack2.length === 0;
    }

    // Peek at the front element
    peek() {
        if (this.stack2.length === 0) {
            while (this.stack1.length > 0) {
                this.stack2.push(this.stack1.pop());
            }
        }
        return this.stack2[this.stack2.length - 1];
    }

    // Print all elements
    print() {
        const temp = [...this.stack2].reverse().concat(this.stack1);
        console.log("Queue:", temp.join(" "));
    }
}

const q = new QueueUsingStack();
q.enqueue(10);
q.enqueue(20);
q.enqueue(30);
q.print();        // Queue: 10 20 30
console.log(q.dequeue()); // 10
q.print();        // Queue: 20 30
