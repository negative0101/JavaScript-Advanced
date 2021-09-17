function solve(arr) {
    let result = []
    for (i = 0; i <= arr.length; i++) {
        if (i % 2 != 0) {
            result.push(arr[i] * 2)
        }
    }
    let final = result.reverse()
    return final.join(' ')

}
solve([10, 15, 20, 25])
solve([3, 0, 10, 4, 7, 3])