const arr = ['apple','banana','orange','elephant','grape']

const vowels = ['a','e','i','o','u']

const v = arr.filter((word) => {
    return vowels.includes(word[0])
})
console.log('vowel words : ',v);
