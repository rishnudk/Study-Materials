const obj = { name:'hari', age:22}
Object.freeze(obj);
obj.age = 30;
console.log(obj.age);


const obj1 = { name : 'hari',age:24}

const updatedobj = {...obj1, from :'knr'}

console.log(obj1);
console.log(updatedobj);

