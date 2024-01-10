const erinsGroceryShop = require("./callback");

//erinsGroceryShop is cb

describe('erinsGroceryShop', () => {
    test('invokes the callback with no error', done => {
        function testCB(err) {
            expect(err).toBe(null);
            done();
        }
        erinsGroceryShop(testCB, {name: 'money', value: '9.99'})
    })
    test('does not run if the cheque has not been deposited', done => {
        function testCB(err){
            expect(err).toBe('deposit the cheque first');
            done();
        }
        erinsGroceryShop(testCB, false)
    })
})

//is this actually a good use of callbacks?