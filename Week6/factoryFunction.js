 //A factory function in JavaScript is a function that returns a new object each time it is called
function createPerson(name,age) {
    return {
        name : name, age: age,greet(){
            console.log(` hello ${this.name} age ${this.age}`);
            
        }
    }
}
let person1 = createPerson('joee', 18)
let person2 = createPerson('derto', 11)

person1.greet();
person2.greet();