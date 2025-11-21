

function eachWord(str) 

{

    let result = []
    let words = str.split(' ')

    for(let word of words) {
        let reversed = ''
        for(let i=word.length-1;i>=0;i--){
            reversed = reversed + word[i]

        }
        result.push(reversed)
    }
    return result.join(' ')
}
console.log(eachWord('hello world'))