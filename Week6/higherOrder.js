// Callback function, passed as a parameter in the higher order function


// higher order function
// function higherOrderFunction(func){
//     console.log('I am higher order function')
//     func()
// }

// higherOrderFunction(callbackFunction);

// function callbackFunction(){
//     console.log('I am  a callback function');
// }

function higherorderfunction(callbackfunction) {
    console.log("higher here");
    
    callbackfunction()
}
function callback() {
    console.log("iam callback");
    
}
higherorderfunction(callback)