const range = require("./range")

describe('', () => {
    test('number array will return with length starting number increased and space', () => {
        expect(range(5, 0, 1)).toEqual([0, 1, 2, 3, 4])
    })
    test('number array will return with length starting number increased and space', () => {
        expect(range(5, 2, 2)).toEqual([2, 4, 6, 8, 10])
    })
})