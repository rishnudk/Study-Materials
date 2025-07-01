// // VAriables & data type

// //String

// var rishnu = "john";
// let rishnu1 = "smith";


// //number
// var num1 = 12 ;
// var num2 = 20.444 ;


// //boolean
// var js = true;
// var html = false;


// //undefined 
// var test1;


// //null
// var test2 = null;
// document.write(test2);
// document.write("<br>")
// document.write(typeof test2);
// document.write("<br>")
// document.write("<br>")

// //Arithmatic  operation 
// var a = 10 ;
// var b = 20 ;
// document.write (a%b);
// document.write("<br>");
// document.write("<br>");

// var a = 280;
// var b = 20;
// document.write(a>b);
// document.write("<br>");
// document.write("<br>");

// //Logical operator
// var a=10 ;
// var b=20 ;
// document.write(a==10  && b==20);
// document.write("<br>");
// document.write("<br>");

// var a = -10 ;
// if (a > 0) {
//     document.wwrite("positive number");
// }
// else {
//     document.write("negaative number");
// } 

// document.write("<br>");
// document.write("<br>");

// //switch
// var a = "C";
// switch(a) {
//     case "A" :
//         document.write("apple");
//         break;
//     case "B":
//         document.write("Bat");
//         break;
//     case "C":
//         document.write("ball");
//         break;
//         default:
//             document.write("ivalid character");
//             break;
// }

// document.write("<br>");
// document.write("<br>");

// //loops
// for(var i = 1; i<=5;i++ ){
//     document.write("hii" + "<br>");
// }
// document.write("<br>");
// document.write("<br>");

// //while loop
// var i=1; 
// while(i<=5) {
//     document.write (i + "<br>");
//     i++;
// }
// document.write("<br>");
// document.write("<br>");

// function greeting () {
//     document.write ("good morning");
// } 


// Steps to Remove an Event Listener


// Step 1: Define the event listener function
// function handleClick() {
//     console.log('Button clicked!');
//   }
  
//   // Step 2: Add the event listener
//   const button = document.querySelector('.btn');
//   button.addEventListener('click', handleClick);
  
//   // Step 3: Remove the event listener
//   button.removeEventListener('click', handleClick);
  

// let i=1;
// for(i=0;i<10;i++){
//   console.log(i);
  
// }


var resultArray = function(nums) {
  let nums(1,2,3,4,5,6)
  let arr1 = []
  let arr2 = []
  for(let i=2;i<nums.length;i++){
      if(nums[i] % 2 === 0){
          arr1.push(nums[i])
      } else{
          arr2.push(nums[i])
      }
      
  }
  return { arr1,arr2}
  
};