const promise1 = Promise.reject("Error 1");
const promise2 = Promise.resolve("success!! ");
const promise3 = Promise.reject("error2")

Promise.any([promise1,promise2,promise3]).then((value) => {
    console.log(value);
    
})

