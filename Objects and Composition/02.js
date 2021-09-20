function solve(arr) {

    let objectToReturn = {

    }
    for (let townEntries of arr) {
        let [name, population] = townEntries.split(' <-> ')
        if (objectToReturn[name] == undefined) {
            objectToReturn[name] = Number(population)
        } else {
            objectToReturn[name] += Number(population)
        }
    }

    for (const [key, value] of Object.entries(objectToReturn)) {
        console.log(`${key} : ${value}`)
    }


}
solve(['Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000'])