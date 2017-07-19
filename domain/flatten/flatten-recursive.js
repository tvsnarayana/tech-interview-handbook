function flatten(array) {
    const result = [];
    if (!Array.isArray(array)) {
        return result;
    }
    function flattenInner(item) {
        if (!Array.isArray(item)) {
            result.push(item);
            return;
        }
        item.forEach(el => flattenInner(el));
    }
    flattenInner(array);
    return result;
}

module.exports = flatten;
