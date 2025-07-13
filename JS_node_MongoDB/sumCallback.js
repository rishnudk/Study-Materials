


function sum(a,b, callback) {
    let result = a + b;
    callback(result)
}

function displayResult(value) {
    console.log('result is' , value

    )
}

sum(3,3,displayResult)
