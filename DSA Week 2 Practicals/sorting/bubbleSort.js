
function bubbleSort(arr) {
    let n = arr.length-1
let count = 0
    for (let i=0; i< n; i++) {
        for(let j=0;j<n-i;j++) {
            if(arr[j] > arr[j + 1]) {
                count++
                let temp = arr[j] 
                arr[j] = arr[j+1]
                arr[j+1] = temp
            }
        }
    }
    console.log(count)
return arr
}

console.log(bubbleSort([1,2,33,22,6,7,3]))

// Best Case (already sorted, optimized with a "no-swap flag"): O(n)

// Worst Case (reverse sorted): O(n²)

// Average Case: O(n²)