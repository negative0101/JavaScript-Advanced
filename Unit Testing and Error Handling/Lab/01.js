function sumRange(arr, start, end) {
    let sum = 0
    if (start < 0) {
        start = 0;
    }
    if (end > arr.length - 1) {
        end = arr.length - 1
    }
    for (let i = start; i <= end; i++) {
        sum += Number(arr[i]);
    }
    return sum
}

console.log(sumRange([10, 20, 30, 40, 50, 60], 3, 300))
