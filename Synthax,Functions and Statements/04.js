function area(arg){
    let result =Math.pow(arg,2) * Math.PI
    if (typeof arg === 'number'){
        console.log(result.toFixed(2))
    }
    else{
        console.log(`We can not calculate the circle area, because we receive a ${typeof arg}.`)
    }
}
area(5)