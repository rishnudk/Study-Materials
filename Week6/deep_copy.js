const person = {
    name : 'john', age : 21 ,
    address : {
        city : 'kannur' ,  country : 'india'
    }
}


///shallow//
const  shallowCopy = Object.assign({},person);
shallowCopy.address.city = 'mumbai'

console.log(person.address.city);
console.log(shallowCopy.address.city);

//deep copy
// const deepCopy = JSON.parse(JSON.stringify(person))
const deepCopy =structuredClone(person)
deepCopy.address.city = 'Bangalore'


console.log(person.address.city);
console.log(deepCopy.address.city);

