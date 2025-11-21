

function removeDup(arr) {
    let result  = []
    let hashTable = {}

    for(let i=0;i<arr.length;i++) {
        if(!hashTable[arr[i]]) {
            hashTable[arr[i]] = true
            result.push(arr[i])
        }
    }
    return result
}
let arr = [1,2,3,4,1,2]
console.log(removeDup(arr))