
// Generate Function generates three 
// different numbers in three calls
function* generatorfunction() {
    yield 10
    yield 20
    yield 30
}
let gen = generatorfunction()
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
