// promise

// const mypromise = new Promise (
//     (resolve,reject) =>
//     {
//         if(5<2){
//             resolve("congratzz")
//         }
//         else {
//             reject("sorry")
//         }
//     }
// )
// mypromise
// .then(result => console.log(result))
// .catch(error => console.error(error))


////call --- apply ---//

// function msg () {
//     console.log(`hello ${this.name}`);
    
// }
// person = { name : "john"}
// msgall = msg.bind(person)
// msgall()

// async function f() {
//     return Promise.resolve (1)
// }
// f().then(alert)


//////////map////

// let weakMap = new WeakMap ();
// let obj1 = { name: 'Alice' };


// weakMap.set(obj1, 'This is Alice');
// console.log(weakMap.get(obj1));  // Output: This is Alice

const number222 = [1, 2, 3,];
const allPositive = number222.every(num => num > 0);
console.log(allPositive); 
console.log(removeL);
