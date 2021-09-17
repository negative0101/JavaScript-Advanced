function solve(arr) {
    let biggest = -999999999
    for (let row = 0; row < arr.length; row++) {
        for (let col = 0; col < arr[row].length; col++) {
            if (arr[row][col] > biggest) {
                biggest = arr[row][col]
            }
        }

    }
    return biggest
}
solve([[20, 50, 10],
[8, 33, 145]])
solve([[3, 5, 7, 12],
[-1, 4, 33, 2],
[8, 3, 0, 4]])