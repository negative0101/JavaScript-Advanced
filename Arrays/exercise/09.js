function solve(arr) {
    let resultToCompare = Number.MIN_SAFE_INTEGER;
    let magic = true;

    for (let i = 0; i < arr.length; i++) {
        let currentResultRow = 0
        let currentResultCol = 0
        for (let j = 0; j < arr.length; j++) {
            currentResultRow += arr[i][j]
            currentResultCol += arr[j][i]

        } if (Number.MIN_SAFE_INTEGER == resultToCompare) {
            resultToCompare = currentResultCol
        } if (currentResultCol != resultToCompare) {
            magic = false

        }
    }

    console.log(magic)
}
solve([[4, 5, 6],
[6, 5, 4],
[5, 5, 5]])