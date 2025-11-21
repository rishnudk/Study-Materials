///deep copy

const original={ name:"Abhiram", details : { age:18, from : 'kannur'} }
  
   const deepcopy=JSON.parse(JSON.stringify(original));

   deepcopy.details.age=34;
   deepcopy.name='koiiii';
   console.log(original.details.age)
   console.log(deepcopy.details.age)
   console.log(deepcopy.name)

   //shallow copy

   let person = { name :'john', details : {age : 11, place : 'kannur'}}

    let shallowcopy = {...person}

   shallowcopy.details.age=10000;
   shallowcopy.name = 'rishnu';
   console.log(shallowcopy.name);
   console.log(person.details.age)
   console.log(shallowcopy.details.age)
   console.log(deepcopy);
   
//    console.log(person);
   console.log(original);
//    console.log(shallowcopy);
   

