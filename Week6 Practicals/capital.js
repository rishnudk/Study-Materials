const str = 'hello'

const result = str.charAt(0).toUpperCase() + str.slice(1,str.length-1)+str.charAt(str.length-1).toUpperCase()

console.log(result);
