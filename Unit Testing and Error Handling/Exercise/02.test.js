let { expect } = require('chai');
let isOddOrEven = require('./02');

describe('isOddOrEven', () => {
    it('checks a non-string and returns undefined', () => {
        expect(isOddOrEven(123123)).to.be.undefined
    })
    it('checks if a string is even', () => {
        expect(isOddOrEven('asdf')).to.be.equal('even')
    })
    it('checks if a string is odd', () => {
        expect(isOddOrEven('asdfg')).to.be.equal('odd')
    })
    it('checks if a string is odd', () => {
        expect(isOddOrEven('')).to.be.equal('even')
    })

})