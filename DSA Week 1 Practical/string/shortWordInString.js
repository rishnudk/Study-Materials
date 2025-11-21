

function shortest(str) {

    if(str.length === 0) return ''
    let words = str.split(' ')
    let short = words[0]

    for (let word of words) {
        if(word.length < short.length){
            short = word
        }
    }
    return short
}

console.log(shortest('hii hello yuppuuu'))