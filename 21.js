// //callback function

// function greet(name, callback) {
//   console.log("Hello " + name);
//   callback();
// }

// function sayBye() {
//   console.log("Goodbye!");
// }

// greet("Rishnu", sayBye);



// //generator function

// function* greetGenerator() {
//   console.log("Start");
//   yield "Hello";
//   console.log("After first yield");
//   yield "World";
//   console.log("End");
// }

// const gen = greetGenerator();

// console.log(gen.next());  // { value: "Hello", done: false }
// console.log(gen.next());  // { value: "World", done: false }
// console.log(gen.next());  // { value: undefined, done: true }



// //factory function

// function createUser(name, age) {
//   return {
//     name,
//     age,
//     greet() {
//       console.log(`Hello, I’m ${this.name} and I’m ${this.age} years old.`);
//     },
//   };
// }

// const user1 = createUser("Rishnu", 22);
// const user2 = createUser("Hisham", 24);

// user1.greet(); // Hello, I’m Rishnu and I’m 22 years old.
// user2.greet(); // Hello, I’m Hisham and I’m 24 years old.



// // Arrow VS Regular function

// const user = {
//   name: "Rishnu",
//   regular: function() {
//     console.log(this.name); // ✅ works
//   },
//   arrow: () => {
//     console.log(this.name); // ❌ undefined
//   }
// };

// user.regular(); // "Rishnu"
// user.arrow();   // undefined


// Explanation:

// In the regular function, this refers to the object (user).

// In the arrow function, this refers to the outer lexical scope (in this case, window or undefined in strict mode).

// ✅ So arrow functions are not suitable for object methods.


// function Student() {
//   this.name = "Rishnu";

//   setTimeout(function() {
//     console.log("Regular:", this.name);
//   }, 1000);

//   setTimeout(() => {
//     console.log("Arrow:", this.name);
//   }, 1000);
// }

// new Student();


// Regular: undefined
// Arrow: Rishnu
// 🧠 Why?

// In the regular function, this points to the global object (not the class instance).

// In the arrow function, this is lexically inherited from the enclosing Student function (so it refers to the instance).

// ✅ That’s why arrow functions are perfect for callbacks inside classes or constructors.


// // call back hell

// getUser(1, (user) => {
//   getCourses(user.id, (courses) => {
//     getCourseDetails(courses[0], (details) => {
//       getInstructor(details.instructorId, (instructor) => {
//         console.log("Instructor:", instructor);
//       });
//     });
//   });
// });


// Using while loop — Sum of multiples of 3 for the first 5 even numbers

