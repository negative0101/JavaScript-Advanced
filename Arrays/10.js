function solve(arr) {
    const last = arr.length - 1
    let totalLeft = 0
    let totalRight = 0

    for (let i = 0; i < arr.length; i++) {
        totalLeft += arr[i][i]
        totalRight += arr[i][last - i]
    }

    console.log(totalLeft, totalRight)
}
solve([[20, 40],
[10, 60]])