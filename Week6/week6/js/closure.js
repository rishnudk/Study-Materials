function outer() {
    let outervar = 10;

    function inner() {
        console.log(outervar);
        
    }
    return inner
}
let innerfn = outer()
innerfn()