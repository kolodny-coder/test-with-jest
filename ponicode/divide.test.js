const divide = require("../divide")


// @ponicode
describe("divide.divide", () => {
    test("0", () => {
        let result = divide(100, 0)
        expect(result).toBe(Infinity)
    })

    test("1", () => {
        let result = divide(100, 2)
        expect(result).toBe(50)
    })

    test("2", () => {
        let result = divide(0, 0)

        expect(result).toBe(NaN)
    })

    test("3", () => {
        let result = divide(Infinity, Infinity)
        expect(result).toBe(NaN)
    })

    test("3", () => {
        let result = divide(-100, 0)
        expect(result).toBe(-Infinity)
    })

    // test("4", () => {
    //     let result = divide(0, -5.48)
    //     expect(result).toBe(-0)
    // })

    // test("5", () => {
    //     let result = divide(0, 1)
    //     expect(result).toBe(0)
    // })
})
