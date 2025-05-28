

function longChar(str) {

    if(str.length === 0) return ''

    let maxChar = str[0]
    let maxCount = 1
    let count = 1

    for(let i =1; i<str.length; i++) {
        if(str[i] === str[i - 1]) {
            count++
        } else{
            count = 1
        }

        if(count > maxCount) {
            maxCount = count
            maxChar = str[i]
        }
    }
    return ` ${maxChar} ${maxCount} times`
}

console.log(longChar('helloooeeeesssdfeee'))