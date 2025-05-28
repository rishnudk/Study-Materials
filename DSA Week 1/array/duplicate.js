function removeDup(arr) {
    let seen = {}
    let result = []

    for(let i=0; i<arr.length;i++) {
        if(!seen[arr[i]]) {
            result.push(arr[i])
            seen[arr[i]] = true
        }
    }
    return result
}

console.log(removeDup([1,2,3,4,5,1,2,3]))