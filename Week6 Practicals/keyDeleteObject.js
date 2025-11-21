const person = { name: 'Alice',age:11,from:'india'}

// delete person.age
console.log(person);


const { from,age, ...newPerson } = person
console.log(newPerson);
