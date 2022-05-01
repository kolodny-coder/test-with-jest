const divide = require('./divide')

describe('My test suite', () => {

    test('Given a number and diviedBy arg, When running divied function, then the return value is the deviation result no reminder', () => {
        const result = divide(6, 2)
        expect(result).toBe(3) 
    })
})