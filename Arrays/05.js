function solve(arr) {
    let res_sorted = arr.sort((a, b) => a - b);
    let result = [res_sorted[0], res_sorted[1]]
    console.log(result.join(' '))
}
solve([30, 15, 50, 5])
