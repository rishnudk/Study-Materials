//  1) Genarator 

// function* Genarator(){
//     yield "hii";
//     yield 2
// }
// const gen=Genarator()
 
// console.log(gen.next())

// console.log(gen.next())
// console.log(gen.next())

                                                                        //1) iterator
// let numbers = [10, 20, 30, 40, 50];
// let iterator = numbers[Symbol.iterator]()

// console.log(iterator.next()); 
// console.log(iterator.next()); 
// console.log(iterator.next()); 
// console.log(iterator.next()); 
// console.log(iterator.next()); 
// console.log(iterator.next()); 


                                                                        //  2) Promise 

const mypromise=new Promise((resolve,reject)=>{
    if(5<2){
        resolve("congragulation")
    }else{
        reject("sorry this is error")
    }

})
mypromise
        .then(result=>console.log(result))
        .catch(error=>console.error(error))

                                                                        //  3) CallBack

//    function hello(callback){
//     callback()
//    }
//    function greet(){
//     console.log("Good morning")
//    }
//    hello(greet)

                                                                        // 4) Curring

// function curring(a){
//     return(b)=>{
//         return(c)=>{
//                 return a*b*c
//             }
//         }
//     }
// console.log(curring(5)(10)(5))

                                                                        // 5)  closure

// function outer(){
//     let a=10
//     function inner(){
//         console.log(a);
        
//     }
//     return inner
// }
// const closer=outer()
// closer()

                                                                        // 6) factory Function

// function createperson(name,age){
//     return{
//         name:name,
//         age:age,
//         great(){
//             console.log(` My Name is ${name} and my age is ${age}`);
            
//         }
//     }
// }
// const person1=createperson('abhiram',18)
// const person2=createperson('akhi',22)

// person1.great()
// person2.great()

                                                                        // 7)  For Each 
// const mark=[44,66,33,22]

// mark.forEach(function (value) {
//     console.log('mark is', value);
    
// })

                                                                        // 8) Asynk Await

//   function fetchdata(){
//     return new Promise((resove,reject)=>{
//       setTimeout(() => {
//         resove("data fetched SucsesFully")
//       }, 2000);
//     })
//   }

//   async function getdata(){
//     console.log("Fetching Data");
//     const data=await fetchdata()
//     console.log(data)
//   }
//   getdata()
 
                                                                        /// 9) call apply
                                                                        ///
     
// let name1={
//    firstname:"Akshy",
//    lastname:"saini",
// }
// let name2={
//    firstname:"akhil",
//    lastname:"Raj"
// }
// function printfullname(hometown,state){
//    console.log(this.firstname+this.lastname+" "+hometown+","+state)
  
// }

/////////////bind//////


// const person = {
//     name: "Alice",
//     greet() {
//         console.log(`Hello, my name is ${this.name}.`);
//     },
// };

// const anotherPerson = { name: "Bob" };

// // Bind `greet` to anotherPerson
// const greetBob = person.greet.bind(anotherPerson);

// greetBob(); // Output: Hello, my name is Bob.




// printfullname.call(name1,"mumbai","maharahtra")


// printfullname.apply(name2,["kasargod","kerala"])

// let map = new Map();
// map.set('name', 'Abhiram');  
// map.set(1, 'One');                                                         //10) Map  

// console.log(map.get('name')); 
// console.log(map.size);      
//                                                                         //

// let weakMap = new WeakMap();
// let obj = { name: 'Abhiram' };

// weakMap.set(obj, 'Personal Data');
// console.log(weakMap.get(obj)); // Output: 'Personal Data'

// obj = null; // The key-value pair is removed automatically.
                                                                           //11) Deep copy
// const original={
//     name:"Abhiram",
//         age:18,
//     }

// const deepcopy=JSON.parse(JSON.stringify(original));
// deepcopy.age=34;
// console.log(original.age)
// console.log(original.age)



                                                                           //12) Shallow Coppy
// const Orginal={
//    name:"abhiram",
//    age:18
// }
// const duplicate=Orginal

// duplicate.age=19
// console.log(duplicate.age)
// console.log(Orginal.age)


                                                                           //13)object destructering
// const person = {
//    name: "John",
//    age: 30,
//    job: "Developer"
// };

// let{name,age,job}=person

// console.log(name); 
// console.log(age); 
// console.log(job); 
                                                                           //14) Reduce Sum
// let arr=[4,2,5,7]
// const output=arr.reduce((acc,curr)=>acc+curr,0)
// console.log(output);

                                                                           //15) second largest Elements Using Reduce
// const arr = [3, 5, 6, 2];

// const output = arr.reduce((acc, curr) => {
//   if (curr > acc.max) {
//     acc.secondMax = acc.max;
//     acc.max = curr;
//   } else if (curr > acc.secondMax && curr !== acc.max) {
//     acc.secondMax = curr;
//   }
//   return acc;
// }, { max: -Infinity, secondMax: -Infinity });


// console.log(output.secondMax);
                                                                               // 16) Map
// let arr=[3,5,2,3]
// const output=arr.map((value)=>value*2)
// console.log(output)
                                                                              // 17) Filter
                                                                           
// let arr=[3,5,2,3]
// const output=arr.filter((value)=>value%2)
// console.log(output)

// function hello(a, b) {
//     let sum = a + b
//     console.log(sum);
//     return sum
    
// }
// const a = hello()
// const b = hello(50, 50)
// console.log(b);
// console.log(hello(40, 30));


//              to capitalize first letter

// function capitalizeFirstLetter(str) {
//     if (str.length === 0) return str; // Handle empty string
//     return str.charAt(0).toUpperCase() + str.slice(1);
// }

// console.log(capitalizeFirstLetter("hello")); // Output: "Hello"



// let myString = "hello world";
// let capitalizedString = CapitalizeFirstLetter(myString);
// console.log(capitalizedString); // Output: "Hello world"



// function capitalizeFirstLetter(str)  {
//     if (str.length === 0) return str; // Handle empty string
//     return str.charAt(0).toUpperCase() + str.slice(1);
// }

// let myString = "hello world";
// let capitalizedString = capitalizeFirstLetter(myString);
// console.log(capitalizedString); // Output: "Hello world"

// const str = "hello world";

// // capitalize the first letter
// // let result = str.charAt(0).toUpperCase() + str.slice(1);

// // print the result

// let result = str.charAt(0).toUpperCase() + str.slice(1);
// console.log(result); // "Hello world"








