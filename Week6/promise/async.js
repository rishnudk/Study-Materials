
async function fetchdata() {
    let promise = new Promise((resolve,reject) => {
        setTimeout (() => resolve("data fetched"),3000)
    })
    let result = await promise
    console.log(result);
    
}
fetchdata()