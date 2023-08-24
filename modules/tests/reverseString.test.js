const reverseString = require('../functions/reverseString.js');

describe("string should be reversed", () => {
    test('the reverse of the \'test\' should be \'tset\'', () => {
        expect(reverseString('test')).toEqual('tset')
    })
    test('the reverse of the \'hello\' should be \'olleh\'', () => {
        expect(reverseString('hello')).toBe('olleh')
    })

    test('the reverse of the \'hello there\' should be \'ereht olleh\'', () => {
         expect(reverseString('hello there')).toEqual('ereht olleh')
    })
})
