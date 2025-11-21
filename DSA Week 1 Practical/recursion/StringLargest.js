let input = 'hi hello hola'

let words = input.split(' ')
console.log(words)

let largest = ''
for(let i=0; i<words.length; i++) {
    if (words[i].length > largest.length)  {
    largest = words[i]
    }
}
console.log(largest)

