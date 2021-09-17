function solve(arr){
    solution = []
    for (i= 0;i<=arr.length; i++){
        if (i % 2 == 0){
            solution.push((arr[i]))}
    }
    console.log(solution.join(' '))
}
solve(['20', '30', '40', '50', '60'])
solve(['5','10'])