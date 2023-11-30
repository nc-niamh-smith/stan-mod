function countVeg(array, string) {
const stringToFind = string;
let returnValue = 0
    for (let i = 0; i < array.length; i++) {
        if(array[i].type === stringToFind) {
            returnValue = returnValue + 1
        }
}
return returnValue;
}

module.exports = countVeg