const stringLength = require('../functions/stringLength.js')

describe("check length", () => {
    test('the length of the "test" string should be 4', () => {
        expect(stringLength('test')).toBe(4);
    })
    test('the length of the "1" string should be 4', () => {
        expect(stringLength("1")).toBe(1)
    });

    test('the length of the "hello" string should be 4', () => {
         expect(stringLength('hello there')).toBe(11)
    })
})

describe("string shouldn't be empty", () => {
    test("the string shouldn't be empty", () => {
        expect(stringLength('test')).toBeGreaterThan(0);
    })
    test("the string shouldn't be empty", () => {
        expect(stringLength("1")).toBeGreaterThan(0);
    })

    test("the string shouldn't be empty", () => {
         expect(stringLength('hello there')).toBeGreaterThan(0);
    })
})
