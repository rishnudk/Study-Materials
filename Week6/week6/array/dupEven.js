function dupEven(arr) {
    const even = [...new Set(arr.filter(num => num % 2 === 0))]
    const odd = arr.filter(num => num %2 !==0)
    return [...even,...odd]
}

const numbers = [1,2,3,4,5,6,7,8]
console.log(dupEven(numbers));
