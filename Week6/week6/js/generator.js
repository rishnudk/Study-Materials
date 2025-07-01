function* reverse(start, end){
    for(let i=start; i>=end; i--) {
        yield i
    }
}
const generator = reverse(10,1)
for(const i of generator){
    console.log(i);
    
}