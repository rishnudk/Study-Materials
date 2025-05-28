

function selection(arr) {
    let n = arr.length 
    
    for(let i=0; i< n;i++) {
        let min = i

        for(let j=i+1;j<n; j++) {

            if(arr[j] < arr[min]){
                min = j
            }
        }

        if(min !== i) {
           let temp = arr[i]
           arr[i] = arr[min]
           arr[min] = temp

        }
    }
    return arr
}

console.log(selection([1,3,9,6]))