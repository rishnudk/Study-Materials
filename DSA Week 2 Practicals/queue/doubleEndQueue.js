class Deque {
    constructor() {
        this.items = [];
    }

    // Insert at the front
    addFront(item) {
        this.items.unshift(item);
    }

    // Insert at the rear
    addRear(item) {
        this.items.push(item);
    }

    // Remove from the front
    removeFront() {
        if (this.isEmpty()) return "Deque is empty";
        return this.items.shift();
    }

    // Remove from the rear
    removeRear() {
        if (this.isEmpty()) return "Deque is empty";
        return this.items.pop();
    }

    // View front item
    peekFront() {
        return this.items[0];
    }

    // View rear item
    peekRear() {
        return this.items[this.items.length - 1];
    }

    // Check if empty
    isEmpty() {
        return this.items.length === 0;
    }

    // Print contents
    print() {
        console.log("Deque:", this.items.join(" "));
    }
}



const dq = new Deque();

dq.addRear(10);     // [10]
dq.addRear(20);     // [10, 20]
dq.addFront(5);     // [5, 10, 20]
dq.print();         // Deque: 5 10 20

dq.removeFront();   // removes 5
dq.removeRear();    // removes 20
dq.print();         // Deque: 10

