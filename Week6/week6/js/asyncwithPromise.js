async function fetchData() {
    console.log('fetching data')
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve('data fetched succesfully')
        },2000)
    })
}

const promise = fetchData()
console.log('promsie returned', promise);

promise
.then((data)=> {
    console.log('resolved data', data);
    
})
.catch((error) => {
    console.log('errpr',error);
    
})
console.log('this will log before the promise resolves');
