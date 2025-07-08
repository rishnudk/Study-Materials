function sum(...args) {
    return args.reduce((total, current) => total+ current , 0)
}

console.log(sum(1,2,3,4,5));
