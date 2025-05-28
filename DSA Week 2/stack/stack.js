// 1. Stack that rejects duplicate values
class UniqueStack {
  constructor() {
    this.stack = [];
    this.set = new Set();
  }

  push(val) {
    if (!this.set.has(val)) {
      this.stack.push(val);
      this.set.add(val);
    } else {
      console.log(`Duplicate value '${val}' rejected.`);
    }
  }

  pop() {
    if (this.stack.length === 0) return null;
    const val = this.stack.pop();
    this.set.delete(val);
    return val;
  }

  display() {
    console.log([...this.stack]);
  }
}

// 2. Sort a Stack (using another stack)
function sortStack(input) {
  let tempStack = [];
  while (input.length > 0) {
    let temp = input.pop();
    while (tempStack.length > 0 && tempStack[tempStack.length - 1] > temp) {
      input.push(tempStack.pop());
    }
    tempStack.push(temp);
  }
  return tempStack;
}

// 3. Reverse a Stack using Recursion
function reverseStack(stack) {
  if (stack.length === 0) return;
  let temp = stack.pop();
  reverseStack(stack);
  insertAtBottom(stack, temp);
  return  stack
}

function insertAtBottom(stack, item) {
  if (stack.length === 0) {
    stack.push(item);
    return;
  }
  let top = stack.pop();
  insertAtBottom(stack, item);
  stack.push(top);
}

// 4. Delete Specific Node from Stack
function deleteValue(stack, target) {
  let tempStack = [];
  while (stack.length) {
    let val = stack.pop();
    if (val !== target) tempStack.push(val);
  }
  while (tempStack.length) {
    stack.push(tempStack.pop());
  }
}

// 5. Min Stack
class MinStack {
  constructor() {
    this.stack = [];
    this.minStack = [];
  }

  push(val) {
    this.stack.push(val);
    if (this.minStack.length === 0 || val <= this.getMin()) {
      this.minStack.push(val);
    }
  }

  pop() {
    const val = this.stack.pop();
    if (val === this.getMin()) {
      this.minStack.pop();
    }
    return val;
  }

  getMin() {
    return this.minStack[this.minStack.length - 1];
  }
}

// 6. Stack using Linked List
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedListStack {
  constructor() {
    this.top = null;
  }

  push(value) {
    const node = new Node(value);
    node.next = this.top;
    this.top = node;
  }

  pop() {
    if (!this.top) return null;
    const value = this.top.value;
    this.top = this.top.next;
    return value;
  }

  display() {
    let curr = this.top;
    let result = [];
    while (curr) {
      result.push(curr.value);
      curr = curr.next;
    }
    console.log(result);
  }
}

// 7. Reverse a String using Stack
function reverseString(str) {
  let stack = [];
  for (let ch of str) stack.push(ch);
  let reversed = '';
  while (stack.length) reversed += stack.pop();
  return reversed;
}

// 8. Palindrome using Stack
function isPalindrome(str) {
  let stack = [];
  for (let ch of str) stack.push(ch);
  for (let ch of str) {
    if (ch !== stack.pop()) return false;
  }
  return true;
}

// 9. Basic Stack Implementation
class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    if (this.isEmpty()) return null;
    return this.items.pop();
  }

  peek() {
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  display() {
    console.log([...this.items]);
  }
}

// 10. Basic Queue Implementation
class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(element) {
    this.items.push(element);
  }

  dequeue() {
    if (this.isEmpty()) return null;
    return this.items.shift();
  }

  front() {
    return this.items[0];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  display() {
    console.log([...this.items]);
  }
}
