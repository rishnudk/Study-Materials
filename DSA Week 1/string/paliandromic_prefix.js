

function paliandrome(s) {
    return s === s.split('').reverse().join('')
}

function lPrefix(str) {
    let prefix = ''

    for (let i=1;i<=str.length; i++) {
        let first = str.slice(0, i)

        if(paliandrome(first)) {
            prefix = first
        }
    }

    return prefix;
}

console.log(lPrefix('levelupp'))