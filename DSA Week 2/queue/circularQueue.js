class CircularQueue {
    constructor(size) {
        this.queue = new Array(size);
        this.size = size;
        this.front = -1;
        this.rear = -1;
    }

    // Add an element
    enqueue(value) {
        if ((this.rear + 1) % this.size === this.front) {
            console.log("Queue is full");
            return;
        }

        if (this.front === -1) {
            this.front = 0;
        }

        this.rear = (this.rear + 1) % this.size;
        this.queue[this.rear] = value;
    }

    // Remove an element
    dequeue() {
        if (this.front === -1) {
            console.log("Queue is empty");
            return;
        }

        const removed = this.queue[this.front];
        if (this.front === this.rear) {
            // Only one element
            this.front = -1;
            this.rear = -1;
        } else {
            this.front = (this.front + 1) % this.size;
        }

        return removed;
    }

    // View current elements
    display() {
        if (this.front === -1) {
            console.log("Queue is empty");
            return;
        }

        let i = this.front;
        let result = "";
        while (true) {
            result += this.queue[i] + " ";
            if (i === this.rear) break;
            i = (i + 1) % this.size;
        }
        console.log("Queue:", result.trim());
    }
}



const cq = new CircularQueue(5);
cq.enqueue(10);
cq.enqueue(20);
cq.enqueue(30);
cq.enqueue(40);
cq.enqueue(50); // Full now
cq.display();   // Output: 10 20 30 40

cq.dequeue();   // Remove 10
cq.dequeue();   // Remove 20
cq.display();   // Output: 30 40

cq.enqueue(60);
cq.enqueue(70);
cq.display();   // Output: 30 40 60 70
