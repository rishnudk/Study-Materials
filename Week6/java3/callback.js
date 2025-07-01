setTimeout( function  () {
    console.log("timerr");
    
},5000)

function x (y){
    console.log("x called here");
    y()
}
x (function  (){
    console.log("anoni called here");
    
}
)   