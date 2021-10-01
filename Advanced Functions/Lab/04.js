function solve(data, criteria) {
    let sortedData = JSON.parse(data);
    let [criteriaOne, criteriaTwo] = criteria.split('-')
    //all -> all employees (first_name,last_name '-' email)
    let result = []
    for (let i = 0; i < sortedData.length; i++) {
        if (criteriaOne == 'all') {
            result.push({ name: sortedData[i]['first_name'] + ' ' + sortedData[i]['last_name'], email: sortedData[i]['email'] })
        } else {
            if (sortedData[i][criteriaOne] == criteriaTwo) {
                result.push({ name: sortedData[i]['first_name'] + ' ' + sortedData[i]['last_name'], email: sortedData[i]['email'] })
            }
        }
    }
    for (let index = 0; index < result.length; index++) {
        console.log(`${index}. ${result[index].name} - ${result[index].email}`)
    }
}


solve(
    `[{
    "id": "1",
    "first_name": "Ardine",
    "last_name": "Bassam",
    "email": "abassam0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Jost",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  },  
{
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }]`,
    'gender-Female')

solve(`[{
    "id": "1",
    "first_name": "Kaylee",
    "last_name": "Johnson",
    "email": "k0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Johnson",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  }, {
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }, {
    "id": "4",
    "first_name": "Evanne",
    "last_name": "Johnson",
    "email": "ev2@hostgator.com",
    "gender": "Male"
  }]`,
    'last_name-Johnson'
)