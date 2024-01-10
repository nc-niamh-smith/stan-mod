const utils = require("./utils")

function erinsGroceryShop() {
    const completedTasks = []
    return utils.writeShoppingList()
    .then((list) => {
        completedTasks.push(list)
        return utils.cashCheque()
    }).then((cheque) => {
        completedTasks.push(cheque)
        return utils.goToTheShop()
    }).then((shop) => {
        completedTasks.push(shop)
        return completedTasks;
    })

}

module.exports = {erinsGroceryShop}