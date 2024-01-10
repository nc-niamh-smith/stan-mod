function validateCheque() {
    //math.rand timeout
    //invoke erinsGroceryShop with true
    //returns something 
}


function erinsGroceryShop(cb) {
    
    if(validateCheque()) {
        cb(null)
    }
    cb('deposit the cheque first')

}

module.exports = erinsGroceryShop