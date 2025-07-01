// //This method returns a promise that resolves or rejects as soon as one of the promises in the iterable resolves or rejects.

// const promise1 = new  Promise((resolve) => setTimeout(resolve,2000,"first"))
// const promise2 = new Promise((resolve) => setTimeout(resolve,1999,"second"))
// Promise.race([promise1,promise2]).then((value) => {
//     console.log(value);
    
// })

const promise1 = new Promise((reject) => setTimeout(reject, 100, "Error!"));
const promise2 = new Promise((resolve) => setTimeout(resolve, 200, "Second"));

Promise.race([promise1, promise2])
  .then((value) => console.log(value))
  .catch((error) => console.log(error));
