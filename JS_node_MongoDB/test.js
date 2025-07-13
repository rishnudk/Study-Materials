

const arr = [100, 10, 45, 10, 2, 89, 32, 100, 5];

for(let i=0;i<arr.length;i++) {
    for(let j=0;i<arr.length-1-i;j++) {
        if(arr[j] > arr[j+1]) {
            let temp = arr[j]
            arr[j] = arr[j+1]
            arr[j+1] = temp
    }
  }
}

console.log(arr);
