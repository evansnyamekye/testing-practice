const capitalize = require('../functions/capitalize.js');

describe("string should be capitalized", () => {
    test('capitalizing the \'test\' string should be \'Test\'', () => {
        expect(capitalize('test')).toBe('Test')
    })
    
    test('capitalizing the \'hello\' string should be \'Hello\'', () => {
        expect(capitalize('hello')).toBe('Hello')
    })

    test('capitalizing the \'hello there\' string should be \'Hello there\'', () => {
         expect(capitalize('hello there')).toBe('Hello there')
    })
})
