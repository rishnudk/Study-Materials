function isAnagram(s, t) {
    if (s.length !== t.length) return false;

    const count1 = {};

    // Count characters in s
    for (let char of s) {
        count1[char] = (count1[char] || 0) + 1;
    }
    let count2 = {}
    for(let char of t) {
        count2[char] = (count2[char] || 0) + 1
    }
    for(let char of t) {
        if(count1[char] !== count2[char]) return false
    } 
    return true
}

console.log(isAnagram('hedllo', 'olleh'))
