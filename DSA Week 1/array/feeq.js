function findFreq(arr) {
    let freq = {} 

    for(let i =0; i<arr.length; i++){
        let num = arr[i]

        if (freq[num]) {
            freq[num]++
        } else {
            freq[num] = 1
        }
    }

    return freq
}

console.log(findFreq([1,2,3,4,5,6,7,1,2,3,4]))