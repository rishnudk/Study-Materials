//  Sum multiple numbers using Arrow Function

function sum(...nums) {
let total = 0
for (let num of nums) {
    total += num;
}
return total;
     
}

console.log(sum(1,2,3,4,5))

const sumNumbers  = (...nums) => {
    return nums.reduce((acc, curr) => acc + curr, 0)
}
console.log(sumNumbers(1,2,3,4,5))


// Create a Promise to check if a number is Odd or Even

function checkOddEven(num) {
    return new Promise((resolve, reject) => {
        if (typeof num !== 'number') {
            reject(' error, input is not a  number')
        } else if ( num % 2 === 0) {
            resolve(' it is even')
        } else {
            resolve('it is odd')
        }
    })
}
// checkOddEven(4)
// .then(result => console.log(result))
// .then(error => console.log(error))

async function checkNumber(num) {
    try {
        const result = await checkOddEven(num)
        console.log(result)
        
    } catch (error) {
        console.log(error)
    }
}

checkNumber(5)

const arrowCheck = (num) => new Promise((reject, resolve) => {
    typeof num !== 'number' ?
    reject('input must be a numberrrrrrr')
    : resolve( num % 2 === 0 ? 'even ' : 'odd')
})

arrowCheck('')
.then(console.log)
.catch(console.error)



// Swap Even & Odd Characters in a string ("ababab" → "bababa")


let str = 'ababab'
let res = ''

for (let i=0;i<str.length;i += 2) {
    if(i + 1 < str.length) {
        res = res + str[ i + 1] + str[i]
    } else {
        res = res + str[i]
    }
   
}
console.log(res)


// Using while loop — Sum of multiples of 3 for the first 5 even numbers


let num = 1
let count = 0
let sum = 0

while (count < 5) {
    if (num % 2 === 0) {
        
    }
}