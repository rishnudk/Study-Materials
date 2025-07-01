function curry(a) {
    return function(b){
        return function(c){
            return a + b + c
        }
    }
}
const result = curry(1)(2)(3)
console.log(result);
