console.log(Object.is(42, 42));           // true
console.log(Object.is('hello', 'hello')); // true
console.log(Object.is({}, {}));           // false (different object references)
console.log(Object.is([], []));           // false (different array references)
console.log(Object.is("hi", 42));
