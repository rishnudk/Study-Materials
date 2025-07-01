const promise1 = new Promise((resolve) => setTimeout(resolve,1000,'resolve 1'))
const promise2 = new Promise((resolve,reject) => setTimeout(resolve,200,'reject 2'))
const promise3 = new Promise((resolve) =>setTimeout(resolve,300,'resolve3'))

Promise.allSettled([promise1,promise2,promise3])
.then((value) => { console.log(value);
}).catch((error) => { console.log(error);
})