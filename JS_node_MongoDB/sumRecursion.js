


function recSum(a , b) {

    if(b === 0) return a

    return recSum(a + 1, b-1)
    
}
console.log(recSum(5,5));
