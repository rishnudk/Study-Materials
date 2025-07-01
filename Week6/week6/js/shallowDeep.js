const arr = {name:'john',age:11, place:{city:'knr',town:'knr'}}

const shallow = {...arr}
// const deep = JSON.parse(JSON.stringify(arr))

// console.log(shallow);
shallow.place.city = 'pariyaram'
shallow.name = 'riju'
console.log(arr.place.city);
console.log(shallow.place.city);
console.log(shallow.name);
console.log(arr.name);



// deep.place.city = 'goa'
// deep.name = 'hari'
// console.log(deep.place.city);
// console.log(arr.place.city);
// console.log(deep.name);
// console.log(arr.name);






