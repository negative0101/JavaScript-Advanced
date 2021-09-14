function week(input){
    let weekdays = {
         'Monday' : 1,
        'Tuesday' : 2,
        'Wednesday' : 3,
        'Thursday' : 4,
        'Friday' : 5,
        'Saturday' : 6,
        'Sunday' : 7 
    }
    if (input in weekdays){
        return (weekdays[input])
    
    }return('error')
}
week('Monday')