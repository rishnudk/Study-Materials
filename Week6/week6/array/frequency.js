const arr = ['apple','banana','apple','orange','apple','banana']

const frequency = arr.reduce((acc,curr) => {
    acc[curr] = (acc[curr] || 0 )  +1;
    return acc
},{})
console.log('string freq',frequency);
