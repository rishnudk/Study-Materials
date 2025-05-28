

let arr1 = ''
function rev(str) {

    if(str.length === 0) return

    let last = str[str.length-1]
    arr1 =arr1+ last
    rev(str.slice(0,-1))
}
rev('hello')
console.log(arr1)