let str = ["apple", "banana", "grape", "mango", "kiwi",'hi']

const largest = str.reduce((acc,curr) => {
    return curr > acc ? curr : acc;
}, '' )
console.log('largest:', largest);
