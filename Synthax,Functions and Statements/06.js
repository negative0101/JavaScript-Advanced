function sum(n,m){
    let someSum = 0
    let num1 = Number(n)
    let num2 = Number(m)
    for (i= num1; i<=num2;i++){
        someSum+=i
    }
    return someSum
}


sum('1', '5' )