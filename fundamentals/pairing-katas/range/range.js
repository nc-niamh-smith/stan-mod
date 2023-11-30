

function range(length, start, step) {
    let array = []
    for(let i = 0; i < length; i++) {
        array.push(i * step + start)
    }
    return array
}

module.exports = range