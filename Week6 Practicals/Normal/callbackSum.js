
function add (a,b,callback) {
    
    let sum = a + b ;
     callback(sum)
}

add( 4,5, (result) => {
    console.log(`the sum is : ${result}`)
})