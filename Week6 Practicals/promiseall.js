//This method takes an iterable of promises and returns a single promise that:

//Resolves when all the promises in the iterable are resolved.
//Rejects if any promise in the iterable is rejected.


const promise1 = Promise.resolve(10)
const promise2 = Promise.resolve(20)
const promise3 = Promise.resolve(30)

setTimeout(() => {
    Promise.all([promise1, promise2, promise3])
.then((value) =>{console.log(value)})
.catch((error) => console.log(error))
}, 2000);



