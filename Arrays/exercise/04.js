function solve(input, num) {
    let arr = input
    for (let i = 0; i < num; i++) {
        let lastEl = arr[arr.length - 1]
        let newArr = arr.slice(0, arr.length - 1)
        newArr.unshift(lastEl)
        arr = newArr

    } console.log(arr.join(' '))
}
solve(['1',
    '2',
    '3',
    '4'],
    2)

solve(['Banana',
    'Orange',
    'Coconut',
    'Apple'],
    15)