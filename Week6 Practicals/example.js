// const fruits = [333,444,555,1,2];
// const [first, second, third] = fruits;

// console.log(first); // "apple"
// console.log(second); // "banana"
// console.log(third); // "cherry"

///print only three digits

// const fruits = [333,444,555,1,2];

// for(let i=0;i<fruits.length;i++){
//     let arr = fruits[i].toString()

// if(arr.length===3){
//     console.log(arr);
    
// }}

//multiply first value and last value of an array

// let arr = [2, 3, 4, 10, 20, 30];
// let first = arr.slice(0,3)
// console.log(first);
// let second = arr.slice(3)
// console.log(second);
// for(let i=0;i<3;i++){
//     console.log(`${first[i]} x ${second[i]} = ${first[i] * second[i]}`);
    
// }

///object creation 
///  1

// let person = {
//     name:'john', age :11 , place : 'kannur',
//     greet : function () {
//         console.log('hello ' + this.place);
        
//     }
// }
// console.log(person.age);
// person.greet()

/// 2

// let person = new Object()
// person.name = 'bob'
// person.greet = function() {mp
//     console.log("hello "+ this.name);
    
// }
// console.log(person.name);
// person.greet();



    
const user = {
    name: 'Alice',
    address: {
      city: 'Wonderland',
      zip: '12345',
    },
  };
  
  // Without optional chaining
  console.log(user.address.city);
  console.log(user.profile.bio); // Output: undefined (No error if 'profile' is undefined)
  // Output: Wonderland
  // If 'address' is undefined, it throws an error.
  
  // With optional chaining
  console.log(user.address?.city); // Output: Wonderland
  console.log(user.profile?.bio); // Output: undefined (No error if 'profile' is undefined)
  