const strings = ['banana','apple','orange','elephant']

const vowel = strings.filter(str => /^[aeiouAEIOU]/.test)
console.log(vowel);

