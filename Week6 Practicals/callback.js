function greet(name,callback) {
    console.log(name);
    callback();
    
}
function callme() {
    console.log('calll back function');
    
}
greet('john',callme)