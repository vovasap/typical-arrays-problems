
exports.min = function min (array) {
    if(array === undefined || !array.length) return 0
    return Math.min(...array)
}

exports.max = function max (array) {
    if(array === undefined || !array.length) return 0
    return Math.max(...array)
}

exports.avg = function avg (array) {
    if(array === undefined || !array.length) return 0
    return array.reduce((el, sum)=> sum + el,0) / array.length
}
