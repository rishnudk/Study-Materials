class StackUsingQueue {
    constructor() {
        this.q1 = [];
        this.q2 = [];
    }

    // Push: always push to q1
    push(value) {
        this.q1.push(value);
    }

    // Pop: move all elements except last from q1 to q2
    pop() {
        if (this.isEmpty()) {
            console.log("Stack is empty");
            return;
        }

        while (this.q1.length > 1) {
            this.q2.push(this.q1.shift());
        }

        const popped = this.q1.shift();

        // Swap q1 and q2
        [this.q1, this.q2] = [this.q2, this.q1];

        return popped;
    }

    // Top element
    top() {
        if (this.isEmpty()) return null;

        while (this.q1.length > 1) {
            this.q2.push(this.q1.shift());
        }

        const top = this.q1.shift();
        this.q2.push(top);

        // Swap queues back
        [this.q1, this.q2] = [this.q2, this.q1];

        return top;
    }

    // Check if stack is empty
    isEmpty() {
        return this.q1.length === 0;
    }

    // Print stack
    print() {
        console.log("Stack:", [...this.q1].reverse().join(" "));
    }
}

const stack = new StackUsingQueue();
stack.push(10);
stack.push(20);
stack.push(30); 
stack.print();         // Stack: 30 20 10
console.log(stack.pop()); // 30
stack.print();         // Stack: 20 10
console.log(stack.top()); // 20

