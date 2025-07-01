

// function fetchdata() {
//    return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             const data ={message : "successsss"}
//             reject(data)
//         },2000)
//     })
// }

// const { log } = require("async");

// fetchdata() 
// .then((data) => {
//     console.log(data.message);
    
// })
// .catch((error) => {
//     console.log(error);
    
// })

/// promise all

// const promise1 =  Promise.resolve(10)
// const promise2 =  Promise.reject(20)
// const promise3 =  Promise.resolve(30)


//     Promise.allSettled([promise1,promise2,promise3])
//     .then((value) => console.log(value))
//     .catch((error) => {console.log(error);
//     })


//promise

// function fetchdata () {
//     return new Promise ((resolve,reject) => {
//         setTimeout(() => {
//             const data = {message : "success"}
//             resolve(data)
//         },2000)
//     })
// }
// fetchdata() 
// .then((data) => console.log(data.message)
// )
// .catch((error) => console.log(error)
// )

//aysnc

// async function fetchdata() {
//     let promise = new Promise((resolve,reject) => {
//         setTimeout(() => resolve("data fetched"),2000)
//     })
//     let result = await promise
//     console.log(result);
    
// }
// fetchdata()

//closure

// function outerfunction() {
//     let outer = 'im outer'

//     return function innerfunction(){
//         console.log(outer);
        
//     }
// }
// let closure = outerfunction()
// closure()

//factory function

// function person(name,age) {
//     return {
//         name:name , age: age,greet() {
//             console.log(`hello ${this.name} age ${this.age}`);
            
//         }
//     }
// }
// let person1 = person("joeee",11)
// let person2 = person("yeahh",14)
// person1.greet()
// person2.greet()

//higher order

// function higher(callbackfunction) {
//     console.log("higher here");
//     callbackfunction()
    
// }
// function callback(){
//     console.log("call back");
    
// }
// higher(callback)


//deep-shallow

// let obj = {a:10, b:{c:20}}
// let shallow = Object.assign({},obj)
// shallow.b.c = 200;
// console.log(shallow.b.c);
// console.log(obj.b.c);


// let obj1 = {a:10, b:{c:20}}
// let deep = JSON.parse(JSON.stringify(obj1))
// deep.b.c =500
// console.log(deep.b.c);
// console.log(obj1.b.c);

//even num second largest

// let arr = [1,2,4,6,8,9,5,11,14]

// let result = arr.reduce((acc,cur) => {
    
//     if(cur % 2 !== 0) {
//         if(cur>acc.large){
//             acc.second =acc.large
//             acc.large = cur
            
//         }
//         else if
//             (cur > acc.second &&cur!== acc.large)
//         {
//             acc.second = cur
//         }
//     }
    
// return acc
// } ,{large : -Infinity, second : -Infinity}
// )
// console.log(result);


/// call apply bind

// function greet(hi,hello) {
//     console.log(`${hi}, ${this.name} ${hello}`)
    
// }
// let person = { name : "john"}

// greet.call(person,"rishnu", "dk")
// greet.apply(person,["hiii","hoooo"])


// function curried(a) {
//     return function(b) {
//         return function(c){
//             return a+b+c;
//         }
//     }
// }
// console.log(curried(1)(2)(3));

//closure 
// function makerCounter() {
//     let count = 1;
//     return function() {
//         return count++
//     }
// }
// const counter =makerCounter()
// console.log(counter());
// console.log(counter());
// console.log(counter());

//factory function

// function personHi(name,age) {
//     return {
//         name:name,age:age, greet() {
//             console.log(`hello ${this.name} age ${this.age}`);
            
//         }
//     }

    
// }
// let person1 = personHi("jowww" , 11)
// let person2 = personHi("hii" , 33)

// person1.greet()
// person2.greet()

/// higher order function

// function higher(callbackfunction) {
//     console.log("higheR HEREEE");
//     callbackfunction()
    
// }
// function callback() {
//     console.log("imm callback");
    
// }
// higher(callback)

//promise

// function fetchData() {
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             const data = { message : "succedd"}
//             resolve(data)
//         })
//     })
// }

// fetchData()
// .then((data) => console.log(data)
// )
// .catch((error) => console.log(error)
// )

// const promise1 = Promise.resolve(10)
// const promise2 = Promise.resolve(20)
// const promise3 = Promise.reject(30)

// Promise.any([promise1,promise2,promise3])
// .then((result) => console.log(result)
// )
// .catch((error) => console.log(error)
// )

// function person(place,age){
//     console.log(`${this.name},  ${age}, ${place}`);
    
// }
// let human = { name: "john"}
// person.call(human, "kannur",18)
// person.apply(human,["kann",11])

function person() {
    console.log(`hello , ${this.name}  `);
    
}
let user = { name: "john"}
let boundperson = person.bind(user)
boundperson()