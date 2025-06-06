

function findSecondLeast(arr) {
    let freqMap = {}

    for(let num of arr) {
        freqMap[num] = (freqMap[num] || 0) + 1
    }

    let freq = [...new Set(Object.values(freqMap))].sort((a,b) => a- b)

    if(freq.length < 2) return null

    let sec = freq[1]
    let result = []

    for(let key in freqMap) {
        if(freqMap[key] === sec) {
            result.push(Number(key))
        }
    }
    return result
}

let arr = [1,2,3,4,5,1,2,3,,4,4,4,5,5]
console.log(findSecondLeast(arr))