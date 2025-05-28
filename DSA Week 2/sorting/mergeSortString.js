function mergeSortString(str) {
    // Convert string to array
    let arr = str.split('');

    // Sort the array using merge sort
    let sortedArr = mergeSort(arr);

    // Convert back to string
    return sortedArr.join('');
}

function mergeSort(arr) {
    if (arr.length <= 1) return arr;

    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));

    return merge(left, right);
}

function merge(left, right) {
    let result = [];
    let i = 0, j = 0;

    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i++]);
        } else {
            result.push(right[j++]);
        }
    }

    return result.concat(left.slice(i)).concat(right.slice(j));
}
console.log(mergeSortString("merge", 'hello'));   // Output: "eegmr"
console.log(mergeSortString("javascript")); // Output: "aacijprstv"


