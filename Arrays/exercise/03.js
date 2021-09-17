function solve(arr) {
    let num = 0
    let nums = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == 'add') {
            num += 1
            nums.push(num)

        } else if (arr[i] == 'remove') {
            num += 1
            nums.pop()
        }
    } if (nums.length > 0) {
        console.log(nums.join('\n'))
    } else {
        console.log('Empty')
    }
}
solve(['add',
    'add',
    'add',
    'add']
)
solve(['add',
    'add',
    'remove',
    'add',
    'add'])