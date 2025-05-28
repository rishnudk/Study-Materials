

function reverse(str) {

   let rev = ''

   for(let i of str){
    rev = i + rev 
   }
   return rev
}

console.log(reverse('hello eorld'))