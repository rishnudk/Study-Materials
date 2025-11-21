function removeOdd(obj){
    for(let key in obj) {
        if(obj[key] % 2 !== 0) {
            delete obj[key]
        }
    }
    return obj
}

const objt = {a:1,b:2,c:3,d:4}

console.log(removeOdd(objt));
