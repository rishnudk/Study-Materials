

function extract(str) {

   let result = ''

   for(let i of str) {
    if(isNaN(i)) {
        result+=i
    }
   }
   return result
}
console.log(extract([1,2,3,4,'a', 'b']))