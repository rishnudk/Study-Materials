

function mergeSort(str) {

    if(str.length <= 1) return str

    let mid = Math.floor(str.length / 2)
    let left = mergeSort(str.slice(0, mid))
    let rigth = mergeSort(str.slice(mid))

    let result = ''
    let i=0, j=0

    while(i < left.length && j< rigth.length) {
        if(left[i] < rigth[j]) {
            result = result + left[i]
            i++
        } else {
            result = result + rigth[j]
            j++
        }
    }
     return result.concat(left.slice(i)).concat(rigth.slice(j))
}

let s = 'hello'
mergeSort(s)
console.log(mergeSort(s))