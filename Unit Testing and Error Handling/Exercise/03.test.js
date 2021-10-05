let { expect } = require('chai');
let lookupChar = require('./03');


describe('happy cases', () => {
    it('checks 3 letter str and returns first char', () => {
        expect(lookupChar('str', 0)).to.be.equal('s')
    })
    describe('other cases', () => {
        it('check with incorrect first incorrect value', () => {
            expect(lookupChar(1, 0)).to.be.undefined
        })
        it('check with incorrect second incorrect value', () => {
            expect(lookupChar(1, 'asdf')).to.be.undefined
        })

        it('check with incorrect second negative value', () => {
            expect(lookupChar('asdas', -1)).to.be.equal('Incorrect index')
        })
        it('check with incorrect second big  value', () => {
            expect(lookupChar('asdas', 111111)).to.be.equal('Incorrect index')
        })

        it('check with incorrect data types ', () => {
            expect(lookupChar('asdas', 'asdfsaf')).to.be.undefined
        })

        it('checks 3 letter str and returns first char', () => {
            expect(lookupChar('str', 1.2)).to.be.undefined
        })

    })

})
