const obj = {a:1,b:2,c:3}

const keys = Object.keys(obj)
console.log(keys);

const last =  keys[keys.length-1]
delete obj[last]
console.log(obj);

