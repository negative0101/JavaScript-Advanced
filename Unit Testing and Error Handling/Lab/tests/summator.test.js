const { expect } = require('chai');
const { createCalculator } = require('/.summator');

describe('Summator', () => {
    let instance = null;

    beforeEach(() => {
        instance = createCalculator();
    });

    it('has all methods', () => {
        expect(instance).to.has.ownProperty('add');
        expect(instance).to.has.ownProperty('subtract');
        expect(instance).to.has.ownProperty('get');
    })

    it('adds numbers', () => {
        instance.add(1);
        expect(instance.get()).to.equal(1);
    })
})