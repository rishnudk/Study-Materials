function nonRepeat(str) {
    let charCount = {}

    for(let i of str) {
        charCount[i] = (charCount[i] || 0 ) + 1

    }

    for (let i of str) {
        if(charCount[i] === 1) return i
    }
}

console.log(nonRepeat('hhhhhhhhhhi'))