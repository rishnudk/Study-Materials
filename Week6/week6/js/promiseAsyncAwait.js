function fetchData () {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve('Data fetch success')
        },2000)
    })
}

async function getData() {
    try {
        console.log('fetching data');
        const result = await fetchData();
        console.log(result);
        
        
    } catch(error) {
        console.log(error);
        
    }
}
getData()