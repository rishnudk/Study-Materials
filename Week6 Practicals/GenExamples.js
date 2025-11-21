//Create a generator that yields the square of numbers from 1 to 10.

// function* squareNumber() {
//      for (let i=1;i<=5;i++){
//         yield i*i
//      }
// }
// let square = squareNumber()
// for(let squ of square) {
//     console.log(squ);
    
// }

//Write a generator function to yield the characters of a string one by one.
// hello => 'h' 'e' 'l' 'l' 'o'

// function* str() {
//     let strWord = 'hello'
//     let empty = ''
//     for(let i=0;i<=strWord.length-1;i++){
//         yield strWord[i]
//     }
// }
// let word = str();
// for(let key of word) {
//     console.log(key);
    
// }

function* newStr(str) {
    for (let char of str) {
        yield char;
    }
}
let newchar = newStr('hello')
for(let char of newchar) {
    console.log(char);
    
}

