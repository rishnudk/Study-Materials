const arr = [1,5,7,8,33,4]

const result = arr.reduce((acc,curr) => {
    if(curr > acc.largest) {
        acc.second = acc.largest
        acc.largest = curr 
    } else if ( curr > acc.second && curr < acc.largest) {
        acc.second = curr
    }
    return acc

},{largest: -Infinity, second:-Infinity})

console.log('second laargest', result.second);
