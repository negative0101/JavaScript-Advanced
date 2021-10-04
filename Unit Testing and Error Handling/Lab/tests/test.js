const { expect } = require('chai');
const isSymmetric = require('./symmetry');

describe('Symmetry checker', () => {
    it('return true for symmetric array', () => {
        expect(isSymmetric([1, 2, 2, 1])).to.be.true;
    });
    it('returns false for non-symmetric array', () => {
        expect(isSymmetric([1, 2, 3])).to.be.false;
    })
    it('returns false for non-array', () => {
        expect(isSymmetric(1, 2, 3)).to.be.false
    })

    it('test4', () => {
        expect(isSymmetric(['a', 'b', 'c'])).to.be.false
    })
    it('test5', () => {
        expect(isSymmetric({ a: 'b', b: 'a' })).to.be.false
    })
    it('test6', () => {
        expect(isSymmetric(5)).to.be.false
    })
    it('test7', () => {
        expect(isSymmetric('5')).to.be.false
    })
    it('test8', () => {
        expect(isSymmetric(['a', 'b', 'b', 'a']))
    })
    it('return true for symmetric array', () => {
        expect(isSymmetric([1, 2, 2, '1'])).to.be.false;
    })
})