function outerFunction(outerVariable) {
    return function innerFunction(innerVariable) {
        console.log(`Outer Variable: ${outerVariable}`);
        console.log(`Inner Variable: ${innerVariable}`);
    };
}

// Create a closure by calling outerFunction
const closureFunc = outerFunction('outside');

// Call the inner function
closureFunc('inside');
