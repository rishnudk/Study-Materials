

function insertionSort(arr) {

    for(let i=1;i<arr.length;i++) {
        let current = arr[i]
        let j = i - 1
        while(j>= 0 && arr[j] > current) {
            arr[j+1] = arr[j]
            j--
        }
        arr[j+1] = current
    }
    return arr
}

console.log(insertionSort([5, 3, 8, 4, 2]))

// Insertion Sort is a simple comparison-based sorting algorithm.
// It builds the sorted part of the array one element at ra time.
// Insertion Sort is great for small arrays or nearly sorted data.

// Best Case (Already Sorted) → Only 1 comparison per pass → O(n)

// Worst Case (Reverse Sorted) → Shift almost everything each time → O(n²)

// Average Case → Roughly half the elements need shifting → O(n²)

// Space Complexity → O(1) (in-place sorting)


