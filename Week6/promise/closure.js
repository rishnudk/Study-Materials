function outerFunction(){
    let outervariable = "iam outside" 
    function innerfunction(){
        console.log(outervariable);
        
    }
    return innerfunction
}
let closure = outerFunction()
closure();