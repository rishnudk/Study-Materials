function anagram(str1, str2) {

    let s1 = str1.split('').sort().join('')
    console.log(s1)
    let s2 = str2.split('').sort().join('')
    console.log(s2)

    return s1 === s2
}

console.log(anagram('listen', 'silent'))