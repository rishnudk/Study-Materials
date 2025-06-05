class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.length = 0;
  }

  // Push: Add an element to the top of the stack
  push(data) {
    const newNode = new Node(data);
    newNode.next = this.top;
    this.top = newNode;
    this.length++;
  }

  // Pop: Remove and return the top element
  pop() {
    if (this.isEmpty()) {
      throw new Error("Stack is empty");
    }
    const poppedData = this.top.data;
    this.top = this.top.next;
    this.length--;
    return poppedData;
  }

  // Peek: Return the top element without removing it
  peek() {
    if (this.isEmpty()) {
      throw new Error("Stack is empty");
    }
    return this.top.data;
  }

  // isEmpty: Check if the stack is empty
  isEmpty() {
    return this.top === null;
  }

  // size: Return the number of elements in the stack
  size() {
    return this.length;
  }

  print() {
    let current = this.top
    while(current) {
      console.log(current.data)
      current = current.next
    }
  }
}

// Example usage
const stack = new Stack();
stack.push("M");
stack.push("E");
stack.push("R");
stack.push("N");
stack.print()
console.log(stack.pop()); // Output: "N"
console.log(stack.peek()); // Output: "R"
console.log(stack.size()); // Output: 3
console.log(stack.isEmpty()); // Output: false
console.log(stack.pop()); // Output: "R"
console.log(stack.pop()); // Output: "E"
console.log(stack.pop()); // Output: "M"
console.log(stack.isEmpty()); // Output: true