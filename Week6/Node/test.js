// let arr = [1,2,3,-6,-7]

// let num1 = arr.filter(num=>num>0)
// let result = num1.reduce((acc,curr) => acc+ curr , 0)
// console.log(result)

// let str = 'hello world'
// let str2 = str.split(' ')
// let result = str2.map(word=> word.charAt(0).toUpperCase() + word.slice(1))
// console.log(result.join(' '))

// function greet( name,callback){
//     console.log(`hello ${name}`)
//     callback()
// }

// function goodbye(){
//     console.log('goodbyeeee')
// }
// greet('rishnu', goodbye)

// function sum (...num){
//     return num.reduce((acc,curr)=> acc+curr,0)
// }
// console.log(sum(1,2,3,4))


// function fetchData(){
//     return new Promise((resolve,reject)=>
//     setTimeout(()=> resolve('data fetched'),2000))
// }
// fetchData()
// .then((data) => console.log(data))
// .catch((error)=> console.log(error))

// let str = 'hello world'
// let str2 = str.split('')
// let result = str2.filter(word => 'aeiou'.includes(word)).length
// console.log(result)

// let arr1 = [1,2]
// let arr2 = [3,4]
// let arr3 = [...arr1,...arr2]
// console.log(arr3)

// let str = ['hii' ,'ggggggggggg', 'hello']
// let result = str.reduce((acc,curr) => curr.length > acc.length? curr:acc)
// console.log(result)

// let arr = [1,2,3,4,5]

// let mid = Math.floor(arr.length/2)
// let a = arr.splice(mid,1)
// console.log(arr)

// let str = Object.freeze({a:10,b:20})
//  str.a = 'hi'

// console.log(str)

let arr = [11,22,66,33,12]

let result = arr.reduce((acc,curr)=>{
    if(curr> acc[0]){
        acc[1] =acc[0]
        acc[0] =curr
    } else if( curr>acc[1] && curr !== acc[0] ){
        acc[1] = curr
    }
    return acc
},[-Infinity,-Infinity])

console.log(result[1])