

function heapify(arr, n, i) {
    let largest = i; // Initialize largest as root
    let left = 2 * i + 1;
    let right = 2 * i + 2;

    // If left child is larger than root
    if (left < n && arr[left] > arr[largest]) {
        largest = left;
    }

    // If right child is larger than largest so far
    if (right < n && arr[right] > arr[largest]) {
        largest = right;
    }

    // If largest is not root
    if (largest !== i) {
        [arr[i], arr[largest]] = [arr[largest], arr[i]]; // Swap

        // Recursively heapify the affected sub-tree
        heapify(arr, n, largest);
    }
}

function buildMaxHeap(arr) {
    const n = arr.length;

    // Start from the last non-leaf node and heapify each node
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapify(arr, n, i);
    }
    return arr;
}

// Example usage:
const array = [4, 10, 3, 5, 1];
buildMaxHeap(array);
console.log("Max Heap:", array);
