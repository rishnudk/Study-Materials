

function sum(n) {

    let sum = 0

    for(let i=2; i<n; i++) {
        isPrime = true

        for(let j=2; j<i ;j++) {
            if ( i % j ===0) {
                isPrime = false
                break
            }
        }
        if(isPrime) {
            sum = sum + i
        }
    }
    return sum
}

console.log(sum(10))