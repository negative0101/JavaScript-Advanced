function solve(arr) {
    let productCatalog = {}

    arr.forEach((el) => {
        let [product, price] = el.split(' : ');
        price = Number(price)
        const index = product[0];
        if (!productCatalog[index]) {
            productCatalog[index] = {}
        }
        productCatalog[index][product] = price;


    })
    let initialSort = Object.keys(productCatalog).sort((a, b) => a.localeCompare(b))

    for (const key of initialSort) {
        let products = Object.entries(productCatalog[key]).sort((a, b) => a[0].localeCompare(b))
        console.log(key)
        products.forEach((el) => {
            console.log(`  ${el[0]}: ${el[1]}`)
        })
    }

}


solve(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']
)