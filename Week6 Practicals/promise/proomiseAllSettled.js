const promise1 = Promise.resolve(10)
const promise2 = Promise.reject("error")
const promise3 = Promise.resolve(30)

Promise.allSettled([promise1,promise2,promise3])
.then((results) => { console.log(results);
})

