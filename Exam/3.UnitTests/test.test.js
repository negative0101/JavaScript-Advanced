let { expect } = require('chai');
let library = require('./library')

describe('test', () => {
    describe('library first function calcPriceOfBook tests', () => {
        it('checks valid input', () => {
            expect(library.calcPriceOfBook('Fortnite', 2000)).to.be.equal(`Price of Fortnite is 20.00`)
            expect(library.calcPriceOfBook('Fortnite', -1)).to.be.equal(`Price of Fortnite is 10.00`)

        })
        it('checks valid input with lower year', () => {
            expect(library.calcPriceOfBook('Fortnite', 1980)).to.be.equal(`Price of Fortnite is 10.00`)
        })
        it('checks invalid input', () => {
            expect(() => library.calcPriceOfBook('Fortnite', '1980')).throws("Invalid input")
        })
        it('checks invalid input', () => {
            expect(() => library.calcPriceOfBook('1980')).throws("Invalid input")
            expect(() => library.calcPriceOfBook('123', 1.2)).throws("Invalid input")
            expect(() => library.calcPriceOfBook()).throws("Invalid input")
            expect(() => library.calcPriceOfBook(12)).throws("Invalid input")
            expect(() => library.calcPriceOfBook(1, 1)).throws("Invalid input")
            expect(() => library.calcPriceOfBook({})).throws("Invalid input")
            expect(() => library.calcPriceOfBook([])).throws("Invalid input")
            expect(() => library.calcPriceOfBook({}, {})).throws("Invalid input")
            expect(() => library.calcPriceOfBook([], [])).throws("Invalid input")

        })


    })
    describe('findBook ', () => {
        it('should check found book', () => {
            expect(library.findBook(["Troy", "Life Style", "Torronto"], "Torronto")).to.be.equal("We found the book you want.")
        })
        it('should check not found book', () => {
            expect(library.findBook(["Troy", "Life Style", "Torronto"], "aTorronto")).to.be.equal("The book you are looking for is not here!")
        })
        it('should check 0 length', () => {
            expect(() => library.findBook([], "aTorronto")).throws("No books currently available")
        })
    })

    describe('arrangeTheBooks', () => {
        it('check if input is int', () => {
            expect(() => library.arrangeTheBooks(1.2)).throws("Invalid input")
        })
        it('check if input is int', () => {
            expect(() => library.arrangeTheBooks(-1)).throws("Invalid input")
        })
        it('check if input is int', () => {
            expect(() => library.arrangeTheBooks('-1')).throws("Invalid input")
        })
        it('check if input is int', () => {
            expect(() => library.arrangeTheBooks({})).throws("Invalid input")
        })
        it('check if input is int', () => {
            expect(() => library.arrangeTheBooks([])).throws("Invalid input")
        })
        it('check if books can fit', () => {
            expect(library.arrangeTheBooks(1)).to.be.equal("Great job, the books are arranged.")
        })
        it('check if books can fit', () => {
            expect(library.arrangeTheBooks(40)).to.be.equal("Great job, the books are arranged.")
        })
        it('check if books can fit', () => {
            expect(library.arrangeTheBooks(41)).to.be.equal("Insufficient space, more shelves need to be purchased.")
        })


    })
})
