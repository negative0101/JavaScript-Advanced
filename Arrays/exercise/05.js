function solve(arr) {
    let currentBiggest = 0
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= currentBiggest) {
            currentBiggest = arr[i]
            newArr.push(arr[i])
        }
    } return newArr
}
solve([1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24])