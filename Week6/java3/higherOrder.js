// function greet(name) {
//     return `hello, ${name}`;
// }
// function printmessage(messageFunction, name) {
//     console.log(messagefunction(name));
    
// }
// printMessage(greet, 'Alice'); 

function greet(name) {
    return `Hello, ${name}!`;
}

function printMessage(messageFunction, name) {
    console.log(messageFunction(name));
}

printMessage(greet, 'Alice'); // Hello, Alice!
