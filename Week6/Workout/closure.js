function outerFunction () {
    let outer = 'hii outer here'

    function innerFunction() {
        console.log(outer);
        
    }
    return innerFunction()
}
let closure = outerFunction()
closure;


