let obj = {a:1,b:{c:2}}
let shallowCopy = Object.assign({}, obj)
shallowCopy.b.c = 100
shallowCopy.a = 200
console.log(obj.b.c);
console.log(obj.a);

let objdeep = {a:10,b:{c:20}}
let deepCopy = JSON.parse(JSON.stringify(objdeep))
deepCopy.b.c =1000
deepCopy.a = 444;
console.log(objdeep.b.c);


