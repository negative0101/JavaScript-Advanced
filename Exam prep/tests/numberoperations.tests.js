let { expect } = require('chai')
let numberOperations = require('./03. Number Operations_Resources');


describe('Test numberOperations', () => {
    describe('Test powNumber functionality', () => {
        it('should return correct power of number', () => {
            expect(numberOperations.powNumber(2)).to.equal(4);
            expect(numberOperations.powNumber(3)).to.equal(9);
            expect(numberOperations.powNumber(1.5)).to.equal(2.25);
            expect(numberOperations.powNumber(-2)).to.equal(4);
            expect(numberOperations.powNumber(0)).to.equal(0);
        });
    });

    describe('Test numberChecker functionality', () => {
        it('should throw an error if input is not a number', () => {
            expect(numberOperations.numberChecker.bind(('string'))).to.throw('The input is not a number!');
            expect(numberOperations.numberChecker.bind((undefined))).to.throw('The input is not a number!');
            expect(numberOperations.numberChecker.bind(([]))).to.throw('The input is not a number!');
            expect(numberOperations.numberChecker.bind(({}))).to.throw('The input is not a number!');
            expect(numberOperations.numberChecker.bind((NaN))).to.throw('The input is not a number!');
        });

        it('should return if input is number and is lower than 100', () => {
            expect(numberOperations.numberChecker('10')).to.equal('The number is lower than 100!');
            expect(numberOperations.numberChecker(10)).to.equal('The number is lower than 100!');
            expect(numberOperations.numberChecker(0)).to.equal('The number is lower than 100!');
            expect(numberOperations.numberChecker(-10)).to.equal('The number is lower than 100!');
            expect(numberOperations.numberChecker(99)).to.equal('The number is lower than 100!');
        });

        it('should return if input is number and is equal or greater than 100', () => {
            expect(numberOperations.numberChecker('100')).to.equal('The number is greater or equal to 100!');
            expect(numberOperations.numberChecker(100)).to.equal('The number is greater or equal to 100!');
            expect(numberOperations.numberChecker(100.5)).to.equal('The number is greater or equal to 100!');
            expect(numberOperations.numberChecker(1000)).to.equal('The number is greater or equal to 100!');
        });
    });

    describe('Test sumArrays functionality', () => {
        it('should return correct result', () => {
            expect(numberOperations.sumArrays([1, 3], [3, 1])).to.deep.equal([4, 4]);
            expect(numberOperations.sumArrays([1, 2, 3], [3, 1])).to.deep.equal([4, 3, 3]);
        });
    });
});