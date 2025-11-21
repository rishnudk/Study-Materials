//to string

let subject = ['apple', 'banana','cherry','mango']
console.log(subject.toString())

//array lenght

console.log(subject.length);

//array reverse

console.log(subject.reverse());

//array sort()

console.log(subject.sort());

// //array fill()

// console.log(subject.fill(' new filled  '));

// //array join()

// console.log(subject.join(" joined"));

//array pop()
let remove = subject.pop()

console.log(remove);

//array push()
subject.push(1)
console.log(subject);

//array shift()
let shift1 = [1,2,3,4]

console.log(shift1.shift());

//array unshift()
let shift2 = [6,7,8,9]

console.log(shift2.unshift("asz"));

let arr = [1, 2, 3];
let removedElement = arr.pop(); // Removes 3 from the array
console.log(arr); // [1, 2]
console.log(removedElement); // 3

let arr2 = [1, 2, 3];
arr2.push(4); // Adds 4 to the end of the array
console.log(arr2); // [1, 2, 3, 4]

//array concact ()

let studentName = ['as','md','fx','dj']
let age = [12,13,14,15]
let joined = studentName.concat(age)
console.log(joined);

///splice () add/remove/replace
//removed
let arr3 = [1,2,3,4,5]
let removeArr3 = arr3.splice(1,2);
console.log(arr3);
console.log(removeArr3);

//add element

let arr4 = [1,2,3,4]
arr4.splice(1,0,7,8)
console.log(arr4);

//replace
let arr5 = [1,2,3,4,5]
arr5.splice(2,2,100,200,300)
console.log(arr5);



//slice ()extract a portion of array
///start,end
let arr6 = [1,2,3,4,5,6]
let arr66 = arr6.slice(2,4)
console.log(arr66);

//indexof 
//to find indexof the element
let arr7 = [1,2,3,4,5]
console.log(arr7.indexOf(3));
//Check if an element exists in an array:
 if(arr7.indexOf(8) !== -1){
    console.log('it exits');
 } else {
    console.log('20 does not');
    
 }

 //lastIndexOf 
 //toFind last occurance
 let array8 = [1,2,3,4,3,5,6]
 let lastIndex = array8.lastIndexOf(3)
 console.log(lastIndex);

 //find()

 let array9 = [1,2,3,4,5]
 function isEven(element) {
    return element % 2 !== 0 ;
 }
 let evenNumber = array9.find(isEven)
console.log(evenNumber);

//findIndex() 
let array10 = [1,5,9,11,55]
let isLargeNum =(element) => element > 50;
let index = array10.findIndex(isLargeNum)
console.log(index);

 












