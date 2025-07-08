function countVowels(input) {
    const matches = input.match(/[aeiouAEIOU]/g)
    return matches ? matches.length:'notAnyVowels'
}
console.log(countVowels('1'));
