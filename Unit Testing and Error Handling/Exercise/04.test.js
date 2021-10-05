let { expect } = require('chai');
let mathEnforcer = require('./04');


describe('Test mathEnforcer', () => {
    it('test AddFive expected', () => {
        expect(mathEnforcer.addFive(5)).to.be.equal(10);
        expect(mathEnforcer.addFive(0)).to.be.equal(5);
        expect(mathEnforcer.addFive(-5)).to.be.equal(0)
        expect(mathEnforcer.addFive(5.05)).to.be.closeTo(10.05, 0.01);
    })
    it('test AddFive undefined', () => {
        expect(mathEnforcer.addFive('5')).to.be.undefined
        expect(mathEnforcer.addFive([])).to.be.undefined
        expect(mathEnforcer.addFive({})).to.be.undefined
        expect(mathEnforcer.addFive('')).to.be.undefined
    })
    it('test subtractTen undefined', () => {
        expect(mathEnforcer.subtractTen('5')).to.be.undefined
        expect(mathEnforcer.subtractTen([])).to.be.undefined
        expect(mathEnforcer.subtractTen({})).to.be.undefined
        expect(mathEnforcer.subtractTen('')).to.be.undefined
    })
    it('test subtractTen expected', () => {
        expect(mathEnforcer.subtractTen(5)).to.be.equal(-5);
        expect(mathEnforcer.subtractTen(0)).to.be.equal(-10);
        expect(mathEnforcer.subtractTen(-5)).to.be.equal(-15)
        expect(mathEnforcer.subtractTen(5.05)).to.be.closeTo(-4.95, 0.01);
    })

    it('test sum expected', () => {
        expect(mathEnforcer.sum(5, 2)).to.be.equal(7);
        expect(mathEnforcer.sum(-5, -5)).to.be.equal(-10);
        expect(mathEnforcer.sum(5, 2.1)).to.be.closeTo(7.1, 0.01);
        expect(mathEnforcer.sum(0, 0)).to.be.equal(0);
        expect(mathEnforcer.sum(5, -2.1)).to.be.closeTo(2.9, 0.01);
        expect(mathEnforcer.sum(5.2, -2.1)).to.be.closeTo(3.1, 0.01);



    })

    it('test sum undefined', () => {
        expect(mathEnforcer.sum('5', 5)).to.be.undefined
        expect(mathEnforcer.sum(5, '5')).to.be.undefined
        expect(mathEnforcer.sum('5', 2.1)).to.be.undefined
        expect(mathEnforcer.sum([], [])).to.be.undefined
        expect(mathEnforcer.sum({}, {})).to.be.undefined
        expect(mathEnforcer.sum()).to.be.undefined
        expect(mathEnforcer.sum('a', 'b')).to.be.undefined
        expect(mathEnforcer.sum(-5, '5')).to.be.undefined
        expect(mathEnforcer.sum('5', -5)).to.be.undefined
        expect(mathEnforcer.sum('5')).to.be.undefined
        expect(mathEnforcer.sum(-5)).to.be.undefined
        expect(mathEnforcer.sum(undefined, NaN)).to.be.undefined


    })

})