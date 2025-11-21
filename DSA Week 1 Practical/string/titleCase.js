
function titleCase(str) {

  let result = []
  let words = str.split(' ')

  for(let word of words) {

    let first = word.charAt(0).toUpperCase()
    let rest = word.slice(1).toLowerCase()

    result.push(first + rest)
  }
  return result.join(' ')
}

console.log(titleCase('hello word'))