const obj = { name :'hari', age: 22}
Object.freeze(obj)
obj.age = 30
console.log(obj.age);
