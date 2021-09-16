function solve(speed,area){
    let status;
    let speedLimits = {
        motorway : 130,
        interstate : 90,        
        city : 50,        
        residential : 20
    }

    if (speed<=speedLimits[area]){
        console.log(`Driving ${speed} km/h in a ${speedLimits[area]} zone`)
        return}
    else if((speed - speedLimits[area]) <= 20){
        status = 'speeding'
    }else if ((speed - speedLimits[area]) <= 40){
        status = 'excessive speeding'
    }else{
        status = 'reckless driving'
    }
    console.log(`The speed is ${speed - speedLimits[area]} km/h faster than the allowed speed of ${speedLimits[area]} - ${status}`)

}
solve(40, 'city')
solve(21, 'residential')
solve(120, 'interstate')
solve(200, 'motorway')