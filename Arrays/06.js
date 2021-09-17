function solve(arr) {
    let sort_res = arr.sort((a, b) => a - b)
    let length = Math.ceil((sort_res.length - 1) / 2)

    return (sort_res.slice(length))
}
solve([4, 7, 2, 5])
solve([3, 19, 14, 7, 2, 19, 6])