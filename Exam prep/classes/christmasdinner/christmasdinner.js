class ChristmasDinner {

    constructor(budget) {
        this.budget = budget;
        this.dishes = [];
        this.products = [];
        this.guests = {};
    }

    set budget(value) {
        if (value < 0) {
            throw new Error('The budget cannot be a negative number');
        }
        this._budget = value;
    }

    get budget() {
        return this._budget;
    }

    shopping([product, price]) {
        if (price > this.budget) {
            throw new Error('Not enough money to buy this product')
        }
        this.products.push(product);
        this.budget = this.budget - price;
        return `You have successfully bought ${product}!`

    }
    recipes(recipe) {
        let recipeName = recipe.recipeName; // the names of the keys in this dishes should be
        let productsList = recipe.productsList;//{ recipeName, productsList } 
        for (let product of productsList) {
            if (!this.products.includes(product)) {
                throw new Error('We do not have this product');
            }
        }
        let newObj = { recipeName, productsList };
        this.dishes.push(newObj);
        return `${recipeName} has been successfully cooked!`
    }

    inviteGuests(name, dish) {
        let filteredDish = this.dishes.filter(e => e.recipeName == dish);
        if (filteredDish.length === 0) {
            throw new Error('We do not have this dish');
        }


        if (this.guests.hasOwnProperty(name)) {
            throw new Error(`This guest has already been invited`);
        }
        this.guests[name] = dish;
        return `You have successfully invited ${name}!`
    }

    showAttendance() {
        let result = [];
        for (const property in this.guests) {
            let name = property;
            let dish = this.guests[property];
            let products = this.dishes.filter(e => e.recipeName == dish).map(e => e.productsList);

            result.push(`${name} will eat ${dish}, which consists of ${products[0].join(', ')}`)
        }
        return result.join('\n').trim();;
    }
}


let dinner = new ChristmasDinner(300);

dinner.shopping(['Salt', 1])
dinner.shopping(['Beans', 3])
dinner.shopping(['Cabbage', 4])
dinner.shopping(['Rice', 2])
dinner.shopping(['Savory', 1])
dinner.shopping(['Peppers', 1])
dinner.shopping(['Fruits', 40])
dinner.shopping(['Honey', 10])

dinner.recipes({
    recipeName: 'Oshav',
    productsList: ['Fruits', 'Honey']
});
dinner.recipes({
    recipeName: 'Folded cabbage leaves filled with rice',
    productsList: ['Cabbage', 'Rice', 'Salt', 'Savory']
});
dinner.recipes({
    recipeName: 'Peppers filled with beans',
    productsList: ['Beans', 'Peppers', 'Salt']
});

dinner.inviteGuests('Ivan', 'Oshav');
dinner.inviteGuests('Petar', 'Folded cabbage leaves filled with rice');
dinner.inviteGuests('Georgi', 'Peppers filled with beans');

console.log(dinner.showAttendance());
