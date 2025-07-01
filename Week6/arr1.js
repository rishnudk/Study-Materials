// let arr = [ 1,2,3]
// arr.push(4);
// console.log(arr)

// let arr2 = [1,2,3,4]
// arr2.pop()
// console.log(arr2)

// let arr3 = [1,2,3]
// arr3.unshift(6,7);
// console.log(arr3) 

// let arr4 = [1,2,3]
// arr4.shift();
// console.log(arr4)
//Iterating Over Arrays

// let arr5 = [1,2,3,4,5]
// arr5.forEach(num=>console.log(num))
// let result5 = []
//  arr5.forEach(num => {
//     result5.push(num * 2)
//  } )
// console.log(result5);



// map ()
//Creates a new array by applying a function to each element.

// let arr6 = [1,2,3,4,5,6]
// let doubled = arr6.map(num => num * 2)
// console.log(doubled);

//filter ()
//Creates a new array with elements that pass a test function
// let arr7 = [1,2,3,4,5]
// let even7 = arr7.filter(num => num% 2 == 0)
// console.log(even7);

//find()
//Returns the first element that satisfies a test function.
// let arr8 = [1,2,3,4]
// let found = arr8.find(num => num>3)
// console.log(found);
// let index = arr8.findIndex(num => num > 3)
// console.log(index);
// let exits = arr8.includes(3)
// console.log(exits);
// let indexof = arr8.indexOf(4);
// console.log(indexof);

// let arr9 = [1,2,3,3,3,3,4]
// let lastindex = arr9.lastIndexOf(3)
// console.log(lastindex);

//manipulating array
//slice()
// let arr10 = [1,2,3,4,5,6,7,8,9]
// let part = arr10.slice(1,5)
// console.log(part);
// //splice()
// let arr11 = [1,2,3,4,5,6,7]
// arr11.splice(2,2,22,33)
// console.log(arr11);

// let a1 =[1,2]
// let a2  = [3,4,5]
// let result6 = a1.concat(a2)
// console.log(result6);

//sort()
// let hii = [1,3,2,6,4]
// hii.sort();
// console.log(hii);

// let arr = [3, 1, 2];
// arr.sort(); // [1, 2, 3]
// console.log(arr);

//reduce() 
// let a4 = [1,2,3,4,5]
// let sum = a4.reduce((acc,cur)=> acc+cur,0)
// console.log(sum);

// join()
// let a6 = [1,2,3,4,5]
// let str = a6.join('hi')
// console.log(str)
// let tostr = a6.toString()
// console.log(tostr);
// console.log(typeof (tostr));

// let a7 = [1,2,3,4,5]
// let check = Array.isArray([1,3,4])
// console.log(check);

// //flat()  Flattens a nested array by a specified depth.
// let a9 = [1,2,3,[4,[6,[8]]]]
// let flat = a9.flat(3)
// console.log(flat);

//flatmap Maps each element and flattens the result into a new array.
// let a10 = [1,2,3,4]

// let res10 = a10.flatMap(num => [num,num * 2])
// console.log(res10);



















