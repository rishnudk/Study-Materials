function firstOperation() {
    return new Promise((resolve,reject) => {
        setTimeout(() =>{
            console.log('First operation completed');
            resolve('Data from first operation');
            
        })
    })
}

function secondOperation(data) {
    return new Promise ((resolve,reject) => {
        setTimeout(() => {
            console.log('second opetion completed',data);
            resolve('data from second operation')
            
        })
    })
}
function thirdOperation(data) {
    return new Promise ((resolve,reject) => {
        setTimeout(() => {
            console.log('third operation completed',data);
            resolve('data from third operation')
            
        })
    })
}
firstOperation()
.then((data) => secondOperation(data))
.then((data) => thirdOperation(data))
.then((data) =>{
    console.log('all operation done',data);
}
)
.catch((error) => {
    console.log(' an error occured', error);
    
})
.finally(() => {
    console.log('promsie chain completed');
    
})