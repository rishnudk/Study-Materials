function* numbergen() {
    for(let i=1; i<=5; i++){
        yield i;
    }
}

let number = numbergen();
for (let num of number ) {
    console.log(num); 
    
}


