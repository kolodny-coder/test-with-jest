const sum = require('./sum')

describe('My test suite', () => {

    test('Given two number, When running sum function, then the return value is the sum of', () => {
        const result = sum(3, 2)
        expect(result).toBe(5) 
    })
})