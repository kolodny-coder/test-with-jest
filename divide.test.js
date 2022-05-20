const {divide, iterativeFunction} = require('./divide')

describe('My test suite', () => {

    test('Given a number and diviedBy arg, When running divied function, then the return value is the deviation result no reminder', () => {
        const result = divide(6, 2)
        expect(result).toEqual(3) 
    }),

    test('Given a number and diviedBy arg, When running divied binary tree function, then the return value is the deviation result no reminder', () => {
        const result = iterativeFunction(6, 2)
        expect(result).toEqual(3) 
    })
})