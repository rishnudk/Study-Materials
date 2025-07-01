//function scope

// function scope() {
//     var a =10
//     console.log(a);    
// }
// console.log(a); // it is not accessible here because 
// scope()

//block scope

function scope(){
    let a = 10;
    console.log(a);
    
}
scope();
console.log(a); // not accessible, block scoped

