exports.min = function min(array) {
    if (Array.isArray(array) !== true || array.length === 0) return 0;
    let min = 0;
    array.filter(item => min > item ? min = item : min);
    return min;
}

exports.max = function max(array) {
    if (Array.isArray(array) !== true || array.length === 0) return 0;
    let max = 0;
    array.filter(item => max < item ? max = item : max);
    return max;
}

exports.avg = function avg(array) {
    if (Array.isArray(array) !== true || array.length === 0) return 0;
    return array.reduce((sum, item) => sum += item, 0) / array.length;
}
