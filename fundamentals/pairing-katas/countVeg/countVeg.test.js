const countVeg = require("./countVeg")


describe('countVeg', () => {
    test('should return 6', () => {
        const arr = [
            {name: 'Beetroot', type: 'root', quantity: 1},
            {name: 'Ginger', type: 'root', quantity: 1},
            {name: 'Broccoli', type: 'brassica', quantity: 1},
            {name: 'Carrot', type: 'root', quantity: 1},
            {name: 'Garlic', type: 'root', quantity: 1},
            {name: 'Radishes', type: 'root', quantity: 1},
            {name: 'Onion', type: 'bulb', quantity: 3},
            {name: 'Parsnip', type: 'root', quantity: 1},
            {name: 'Chard', type: 'leaf', quantity: 3},
            {name: 'Runner beans', type: 'legume', quantity: 8}
        ]
        const string = 'root'
        expect(countVeg(arr, string)).toBe(6)
    })
})