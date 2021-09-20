function solve(name, population, treasury) {

    const cityRecord = {
        name: name,
        population: Number(population),
        treasury: Number(treasury),
        taxRate: 10,
        collectTaxes() {
            this.treasury += Math.floor(this.population * this.taxRate);
        },
        applyGrowth(percentage) {
            this.population += Math.floor(this.population * (percentage / 100))
        },
        applyRecession(percentage) {
            this.treasury -= Math.ceil(this.treasury * (percentage / 100))
        },

    }
    return cityRecord
}