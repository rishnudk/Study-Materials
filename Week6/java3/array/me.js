
//                 // call---apply

function info (age,place) {
    console.log (`${this.name} is ${age} years and he is from ${place}`)
}
person = { name : "john"}
info.call(person, 30, "kannur")

function msg () { 
console.log(`hello ${this.name}`);
}
const person = {name : "john"}


const boundmsg = msg.bind(person)
boundmsg ()
// // 



// function msg () {
//     console.log(`hello ${this.name}`);
    
// }
// let person = { name : "john"}
// let msgall = msg.bind(person)
// msgall()

// function self (age,place) {
//     console.log(`${this.name} is ${age} from ${place}`);
    
// }
// person = { name :"john"}
// self.apply(person,[22,"kannur"])


//////////////////////////////generator syntax
function* generatorFunction() {
    yield 'hello'
    yield 'hiii'
    yield 'world'
}
const generator = generatorFunction()
console.log(generator);


///////////////////promise

const mypromise = new Promise (
    (resolve,reject) => {
            if (5 < 2) {
                resolve("congratzz")
            }
            else {
                reject("sorry")
            }
    }
)
mypromise 
.then(result =>console.log(result))
.catch(error =>console.error(error))


///////////////////////////Currying

function currying(a) {
    return(b) => {
        return(c) => {
            return a*b*c
        }
    }
}
console.log(currying(5)(10)(15));

////////////////////////factory function

function factoryFunction(arg) {
    return {
        property1 : arg.property1,
        property2 : arg.property2,
        method1() {
            console.log(`property1: ${this.property1}`);
            
        }
    }
}

//////////////////map

const num= [1,2,3,4,5]
const double = num.map(hii => hii*2)
console.log(double);

///////////filter

let num1 = [1,2,3,4,5]
let even = num1.filter(hii => hii % 2 == 0)
console.log(even);

//////////////reduce

let num2 = [1,2,3,4,5]
let sum = num2.reduce((a,b) => a+b )
console.log(sum);

///calll
 



















  




