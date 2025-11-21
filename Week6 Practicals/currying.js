function curryfun(a){
    return function(b){
        return function(c){
             return a+b+c
        }
    }
}
console.log(curryfun(4)(6)(8));
