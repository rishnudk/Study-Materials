function fetchData(callback) {
    setTimeout(() => {
        callback('data fettched')
    },1000)
}
fetchData((data) => {
    console.log(data);
    
})