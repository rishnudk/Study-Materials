function fetchData() {
    return new Promise ((resolve,reject) => {
        setTimeout(() => {
            resolve('data fetch success')
        },4000)
    })
}
fetchData()

.then((data) => {
    console.log('success', data);
    
})
.catch((error) => {
    console.log('error' ,error);
    
})