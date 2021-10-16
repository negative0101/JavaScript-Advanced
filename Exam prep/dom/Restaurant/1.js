class Restaurant {
    constructor(budgetMoney) {
        this.budgetMoney = budgetMoney
        this.menu = {};
        this.stockProducts = {};
        this.history = [];
    }
    loadProducts(products) {
        let result = []
        for (let i = 0; i < products.length; i++) {
            let [prod, quantity, price] = products[i].split(' ')

            if (Number(price) <= this.budgetMoney) {
                if (this.stockProducts[prod]) {
                    this.stockProducts[prod] += Number(quantity)
                } else {
                    this.stockProducts[prod] = Number(quantity);
                }
                this.budgetMoney -= price
                result.push(`Successfully loaded ${quantity} ${prod}`)
            } else {
                result.push(`There was not enough money to load ${quantity} ${prod}`)
            }


        }
        return result.join('\n')
    }
    addToMenu(meal, neededProducts, price) {
        let currentMenu = {}
        if (!this.menu.hasOwnProperty(meal)) {
            currentMenu['products'] = {};
            currentMenu['price'] = Number(price)
            for (let i = 0; i < neededProducts.length; i++) {
                let [product, quantity] = neededProducts[i].split(' ');
                currentMenu['products'][product] = Number(quantity);
            }
            this.menu[meal] = currentMenu
        } else {
            return `The ${meal} is already in the our menu, try something different.`

        }
        if (Object.keys(this.menu).length % 2 == 0) {
            return `Great idea! Now with the ${meal} we have ${(Object.keys(this.menu).length)} meals in the menu, other ideas?`
        } else if ((Object.keys(this.menu).length == 1)) {
            return `Great idea! Now with the ${meal} we have 1 meal in the menu, other ideas?`

        }


    }
    showTheMenu() {
        if (Object.keys(this.menu).length == 0) {
            return `Our menu is not ready yet, please come later...`
        } else {
            let result = []
            for (let meal in this.menu) {
                result.push(`${meal} - $ ${this.menu[meal]['price']}`)

            }
            return result.join('\n')
        }
    }

    makeTheOrder(meal) {
        if (!this.menu.hasOwnProperty(meal)) {
            return `There is not ${meal} yet in our menu, do you want to order something else?`
        }
        let productsToRemove = []
        for (const prod in this.menu[meal]['products']) {
            if (this.menu[meal]['products'][prod] <= this.stockProducts[prod]) {
                let currentProd = [prod, this.menu[meal]['products'][prod]]
                productsToRemove.push(currentProd)
            } else {
                return `For the time being, we cannot complete your order (${meal}), we are very sorry...`
            }

        }
        for (let i = 0; i < productsToRemove.length; i++) {
            let [product, quantity] = productsToRemove[i];
            this.stockProducts[product] -= Number(quantity);
        }
        this.budgetMoney += this.menu[meal]['price']
        return `Your order (${meal}) will be completed in the next 30 minutes and will cost you ${this.menu[meal]['price']}.`



    }

}

// let kitchen = new Restaurant(1000);
// console.log(kitchen.loadProducts(['Banana 10 5', 'Banana 20 10', 'Strawberries 50 30', 'Yogurt 10 10', 'Yogurt 500 1500', 'Honey 5 50']));

let kitchen = new Restaurant(1000);
console.log(kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99));
console.log(kitchen.addToMenu('Pizza', ['Flour 0.5', 'Oil 0.2', 'Yeast 0.5', 'Salt 0.1', 'Sugar 0.1', 'Tomato sauce 0.5', 'Pepperoni 1', 'Cheese 1.5'], 15.55));
console.log(kitchen.showTheMenu());
kitchen.loadProducts(['Yogurt 30 3', 'Honey 50 4', 'Strawberries 20 10', 'Banana 5 1']);
kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99);
console.log(kitchen.makeTheOrder('frozenYogurt'));
