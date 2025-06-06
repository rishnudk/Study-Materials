

function leastOcc(arr) {
    let freq = {}
    let min = Infinity
    let result = []

    for(let num of arr) {
        freq[num] = (freq[num] || 0) + 1
    }

    for(let num in freq) {
        if(freq[num] < min) {
            min = freq[num]
            result = Number(num)
        }
    }
    return result
}
let arr = [1,1,1,2,2,2,3,3,3,4]
console.log(leastOcc(arr))