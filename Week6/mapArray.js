const number1 = [1,2,3,4,5]
const double = number1.map(num =>num*2)
console.log(double);

const word = ['banana']
const upper = word.map(up => up.toUpperCase())
console.log(upper);

const arr1 = [10,20,30]
const fixed = arr1.map(fix => fix + 5 )
console.log(fixed);

const string = ['hello', 'yes','yuuuuuuuuuuuuuuuu']
const lenght = string.map(leng => leng.length)
console.log(lenght);

const arr2 = [1,4,9,16]
const root = arr2.map( square => Math.sqrt(square))
console.log(root);

 const user = [ { name : 'john', age : '12', place : 'knr'},
    { name : 'hari', age : '44', place : 'newyork'}
 ]
 const result = user.map(data =>(
    {name : data.name, age : data.age }
 ))
 console.log(result);

 const  num3 = [1,2,3,4,5,6,7,8]
 const three = num3.map(divisible => divisible % 2 ==0 ? divisible :null).filter(num =>num !==null)
 console.log(three);
 
 const num4 = [1,2,3,4,5,6,7,8]
 const result1 = num4.filter(divi => divi % 2 === 0)
 console.log(result1);

 const arr7 = [1,2,3,4,5]
 const result7 = arr7.map(oe =>{
   if (oe%2 === 0){
      return 'even';
   }
   else {
      return 'odd';
   }
 });
 console.log(result7)

 const arr8 = ['react' ,'angular']
 const result8 = arr8.map(num8 => num8 + '-JS')
 console.log(result8);
 
 const arr9 = ["2024-11-01", "2024-12-23"]
 const result9 = arr9.map(new9 => {
   const [year,month,day] = new9.split("-");
   return `${month}/${day}/${year}`
 })
 console.log(result9);

 const arr10 = [1,2,3,4,5]
 console.log(...arr10);

 const arr11 = [1,2,3,4,5]
 const result11 = Math.min(...arr11)
 console.log(result11);

 const arr12 = [1,2,3,4,5]
 const result12 = arr12.reduce((max,current) => (current > max ? current : max), arr12[0] )
 console.log(result12);

 const arr13 = [1,2,3,4,5,111]
 const result13 = arr13.reduce((max,current)=> {
   if(current % 2 !==0) {
      return max = current;
   }
   else {
      return max;
   }
 }, -100)
 console.log(result13);

 const arr14 = [1,2,3,4,5,6,7]
 const result14 = arr14.filter((num14)=> num14 % 2 !==0)
 console.log(result14);
 
 const arr15 = [1,2,3,4,5,6,7,8,9,19]
const result15 = arr15.filter((num15)=>num15>5)
console.log(result15);

const arr16 = [1,2,3,-2,-4,-7]
const result16 = arr16.filter((num16)=> num16 > 0)
console.log(result16);

const arr17 = [1,2,3,4,6,9,7]
const result17 = arr17.filter((num17) => num17 % 3 ===0  )
console.log(result17);

const arr18 = [1,1,2,2,3,3,4,5,6,]
const result18 = arr18.filter((num18,index18,array118)=> array118.indexOf(num18)===index18)
console.log(result18 );

const arr19 = [1,1,2,2,3,3,4,5,6,]
const result19 = [...new Set(arr19)]
console.log(result19);
const result19a = result19.filter((num19a=> num19a % 2 !== 0))
console.log(result19a);

const arr20 = [11,22,22,33,44,5,6,,5,6]
const even20 = arr20.filter(num20 =>num20 % 2 === 0)
console.log(even20);
const unique20 = [...new Set(even20)]
console.log(unique20);

function removeDuplicateEvenNumbers(arr) {
   // Step 1: Filter out even numbers
   const evenNumbers = arr.filter(num => num % 2 === 0);
   
   // Step 2: Remove duplicates using Set
   const uniqueEvenNumbers = [...new Set(evenNumbers)];
   
   return uniqueEvenNumbers;
   
}


let b = null;
console.log(b); // null
console.log(x);


let obj = { key: null };
console.log(obj.key); // null












 
 
 
 
 


 