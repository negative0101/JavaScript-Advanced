function solve(arr) {

    const allCars = {};

    arr.forEach((el) => {
        let [brand, car, quantity] = el.split(' | ');
        if (!allCars[brand]) {
            allCars[brand] = {}
            allCars[brand][car] = Number(quantity)
        } else {
            if (!allCars[brand][car]) {
                allCars[brand][car] = Number(quantity)
            } else {
                allCars[brand][car] += Number(quantity)
            }

        }
    })
    for (const property in allCars) {
        console.log(`${property}`)
        for (const key in allCars[property]) {
            console.log(`###${key} -> ${allCars[property][key]}`)
        }
    }
}





console.log(solve(['Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10']))