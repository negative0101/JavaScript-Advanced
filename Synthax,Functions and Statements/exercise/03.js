function solve(n){
    n = String(n)
    let total = 0
    let lastChar = n[0]
    let final = true
    for ( let i=0; i<n.length;i++){
        if (n[i] == lastChar) total +=Number(n[i])
        else{
            total+=Number(n[i])
            final = false
        }
    }
    console.log(final)
    console.log(total)    
}

solve(2222222)
solve(1234)