function solve(num,com1,com2,com3,com4,com5){
    let arr = [com1,com2,com3,com4,com5]
    num = Number(num)
    for (let el of arr){
        if (el == 'chop'){
            num /= 2
            console.log(num)
        }else if (el == 'dice'){
            num =Math.sqrt(num)
            console.log(num)

        }else if (el == 'spice'){
            num +=1
            console.log(num)

        }else if (el == 'bake'){
            num *= 3
            console.log(num)

        }else if (el == 'fillet'){
            num = (num *= 0.80).toFixed(1)
            console.log(num)

        }
    }
    
    }

//solve('32', 'chop', 'chop', 'chop', 'chop', 'chop')
solve('9', 'dice', 'spice', 'chop', 'bake', 'fillet')