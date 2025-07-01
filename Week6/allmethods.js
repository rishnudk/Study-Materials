///filter 
const array1 = [1,2,3,4,5]
const result1 = array1.filter(num1=> num1 % 2 == 0)
console.log(result1);

///reduce 

const array2 = [1,2,3,4,5]
const result2 = array2.reduce(((a,b) => a+b))
console.log(result2);

///map///
const array3 = [1,2,3,4,5]
const result3 = array3.map(num3 => num3 > 2)
console.log(result3);

///every
const number222 = [1, 2, 3, 4, 5];
const allPositive = numbers222.every(num => num > 0);
console.log(allPositive); // Output: true

///some  
const numbers111 = [1, 2, 3, 4, 5];
const hasEvenNumber = numbers111.some(num => num % 2 === 0);
console.log(hasEvenNumber); // Output: true



//call



function info (age,place) {
    console.log(`${this.name} is ${age} from ${place}`);
}

person = { name :'john' }
info.call(person,20,"kannur")

function yes (age,place) {
    console.log(`${this.name} is ${age} from ${place}`);


}
person = { name : 'john'}
yes.apply(person,[22,"hii"])

///bind
function  info1 () {
    console.log(` hello ${this.name}`);
    
}
 person = { name : 'john'}
 msgallh =info1.bind(person)
msgallh() 

///reduce
const arr5 = [1,2,3,4,5]
result5 = arr5.reduce((total,num) => total+num,0)
console.log(result5);

///some 
const arr6 = [1,2,3,4,5]
result6 =  
