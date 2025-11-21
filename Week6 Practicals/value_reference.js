//by value

let a = 10;
let b = a; // b is a copy of a

b = 20; // Change b
console.log(a); // 10 (original value is unaffected)
console.log(b); // 20 (modified copy)



//by reference

let obj1 = { name: 'Alice' };
let obj2 = obj1; // Both obj1 and obj2 refer to the same object

obj2.name = 'Bob'; // Modify obj2
console.log(obj1.name); // 'Bob' (original is also affected)
