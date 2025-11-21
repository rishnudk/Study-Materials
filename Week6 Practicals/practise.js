///1 to 10 using a do-while loop:
let num1 = 1;
do {
    console.log(num1);
    num1++;
    
}
while (num1 <= 10)

    ///reverse a string using a loop
    function reverseString (str) {
        let reverse = ''
        for (let i = str.length -1; i>=0; i--){
        reverse += str[i]
        }
            return reverse;
    }
    console.log(reverseString('hello'));

    ///print even numbers in reverse order using a loop

    for (let i =10; i>=1;i--) {
        if(i % 2 == 0)
            console.log(i);
            
    }

    ///Loop through an object and print keys and values.
    const obj = { a:1,b:2,c:3}
    for(let ket in obj) {
        console.log(`key ${key}, value : ${obj[key]}`);
        
    }


    