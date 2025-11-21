

////11111111111///////////////////////////////////////////////////21. Merge Two Sorted Lists


var mergeTwoLists = function(list1, list2) {

    if(!list1) return list2
    if(!list2) return list1

     if(list1.val < list2.val) {
        list1.next = mergeTwoLists(list1.next, list2)
        return list1
     } else {
        list2.next = mergeTwoLists(list1, list2.next)
        return list2
     }
    
};

////22222222////////////////20. Valid Parentheses


var isValid = function(s) {

 const stack = []
const map = { ']' : '[', '}' : '{' , ')' : '('}

for(let char of s) {
    if(char === '{' || char == '[' || char == '(') {
        stack.push(char)
    } else {
        if(stack.pop() !== map[char]) {
            return false
        }
    }
}
return stack.length===0
    
};



/////////////////3333////////////////242. Valid Anagram

var isAnagram = function(s, t) {
    if (s.length !== t.length) return false;

    let count = {};

    // Count characters in s
    for (let char of s) {
        count[char] = (count[char] || 0) + 1;
    }

    // Subtract count using t
    for (let char of t) {
        if (!count[char]) {
            return false; // either doesn't exist or more times than in s
        }
        count[char]--;
    }

    return true;
};





////////4444444444444///Merge two sorted arrays



function mergeSortedArrays(nums1, nums2) {
    let result = [];
    let i = 0;
    let j = 0;

    while (i < nums1.length && j < nums2.length) {
        if (nums1[i] < nums2[j]) {
            result.push(nums1[i]);
            i++;
        } else {
            result.push(nums2[j]);
            j++;
        }
    }

    // Add any remaining elements
    while (i < nums1.length) {
        result.push(nums1[i]);
        i++;
    }

    while (j < nums2.length) {
        result.push(nums2[j]);
        j++;
    }

    return result;
}



///////////5555/////////// two sum

var twoSum = function (nums, target) {

    let map = new Map() 
    for(let i=0;i<nums.length;i++) {
        let value = target - nums[i]
        if(map.has(value)) {
            return [map.get(value), i]
        }
        map.set((nums[i]), i)
    }
}


////////////66666666////////// Reverse a queue

function reverseQueue(queue) {
    let stack = [];

    // Step 1: Dequeue and push into stack
    while (queue.length > 0) {
        stack.push(queue.shift());
    }

    // Step 2: Pop from stack and enqueue back
    while (stack.length > 0) {
        queue.push(stack.pop());
    }

    return queue;
}

console.log(reverseQueue([1, 2, 3, 4, 5])); // [5, 4, 3, 2, 1]






//////////////7777//////reverse stack recursion

function reverseStack(stack) {
    if (stack.length === 0) return;

    // Step 1: Pop the top
    let top = stack.pop();

    // Step 2: Reverse the rest of the stack
    reverseStack(stack);

    // Step 3: Push current element to the bottom
    insertAtBottom(stack, top);
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

// Example
let s = [1, 2, 3, 4]; // 4 is the top
reverseStack(s);
console.log(s); // [4, 3, 2, 1]



/////////////8888888888/////////Reverse a string using stack

function reverseString(str) {
    let stack = [];

    // Step 1: Push all characters into stack
    for (let char of str) {
        stack.push(char);
    }

    // Step 2: Pop from stack to build reversed string
    let reversed = '';
    while (stack.length > 0) {
        reversed += stack.pop();
    }

    return reversed;
}

console.log(reverseString("hello")); // Output: "olleh"


/////////9999999//////////// Palindrome using stack

function isPalindrome(str) {
    let stack = [];

    // Step 1: Push all characters to stack
    for (let char of str) {
        stack.push(char);
    }

    // Step 2: Build reversed string from stack
    let reversed = '';
    while (stack.length > 0) {
        reversed += stack.pop();
    }

    // Step 3: Compare original and reversed
    return str === reversed;
}

console.log(isPalindrome("madam"));     // true
console.log(isPalindrome("hello"));     // false
console.log(isPalindrome("racecar"));   // true



/////////10///////////////// convert stackToQueue

function stackToQueue(stack) {
    let queue = [];

    // Step 1: Pop all elements from stack
    while (stack.length > 0) {
        queue.unshift(stack.pop()); // insert at front of queue
    }

    return queue;
}

// Test
let stack = [1, 2, 3]; // 3 is top
let queue = stackToQueue(stack);
console.log(queue); // Output: [1, 2, 3]




///////11//////// minStack//////////

class MinStack {
    constructor() {
        this.stack = [];
        this.minStack = [];
    }

    push(x) {
        this.stack.push(x);

        // Only push to minStack if it's empty or x <= current min
        if (this.minStack.length === 0 || x <= this.getMin()) {
            this.minStack.push(x);
        }
    }

    pop() {
        let popped = this.stack.pop();

        // If popped is same as min, remove from minStack too
        if (popped === this.getMin()) {
            this.minStack.pop();
        }
    }

    top() {
        return this.stack[this.stack.length - 1];
    }

    getMin() {
        return this.minStack[this.minStack.length - 1];
    }
}

// Test
let minStack = new MinStack();
minStack.push(3);
minStack.push(5);
console.log(minStack.getMin()); // 3
minStack.push(2);
minStack.push(1);
console.log(minStack.getMin()); // 1
minStack.pop();
console.log(minStack.getMin()); // 2




/////12///// Freq using hash table

function charFrequency(str) {
    const freq = {};

    for (let char of str) {
        freq[char] = (freq[char] || 0) + 1;
    }

    return freq;
}

console.log(charFrequency("banana"));




