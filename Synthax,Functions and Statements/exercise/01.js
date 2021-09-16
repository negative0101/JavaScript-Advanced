function solve (str,numKg,price){

    numKg *= 0.001
    let result = price * numKg
    console.log(`I need $${result.toFixed(2)} to buy ${numKg.toFixed(2)} kilograms ${str}.`
    )
}
solve('orange', 2500, 1.80)
solve('apple', 1563, 2.35)