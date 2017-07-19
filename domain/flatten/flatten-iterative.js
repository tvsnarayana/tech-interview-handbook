function flatten(array) {
    const result = [];
    const stack = [];
    if (!Array.isArray(array)) {
        return result;
    }
    stack.push({ array, index: 0 });
    while (stack.length) {
        const top = stack.pop();
        for (let i = top.index; i < top.array.length; i++) {
            if (Array.isArray(top.array[i])) {
                stack.push({ array: top.array, index: i + 1 });
                stack.push({ array: top.array[i], index: 0 });
                break;
            }
            result.push(top.array[i]);
        }
    }
    return result;
}

module.exports = flatten;
