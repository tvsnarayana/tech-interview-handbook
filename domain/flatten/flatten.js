function flattenRecursive(array) {
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

function flattenIterative(array) {
    const result = [];
    if (!Array.isArray(array)) {
        return result;
    }
    const stack = [{ array, index: 0 }];
    while (stack.length) {
        const { array, index } = stack.pop();
        for (let i = index; i < array.length; i++) {
            const el = array[i];
            if (Array.isArray(el)) {
                stack.push({ array: array, index: i + 1 });
                stack.push({ array: el, index: 0 });
                break;
            }
            result.push(el);
        }
    }
    return result;
}

(() => {
    const assert = require('assert');
    [flattenRecursive, flattenIterative].forEach((fn) => {
        assert.deepEqual(fn([1, 2, 3]), [1, 2, 3]);
        assert.deepEqual(fn([1, [2, 3]]), [1, 2, 3]);
        assert.deepEqual(fn([1, [2, 3], 4, [5, 6]]), [1, 2, 3, 4, 5, 6]);
        assert.deepEqual(fn([[2, 3, 5, 6]]), [2, 3, 5, 6]);
        assert.deepEqual(fn([[2, [3, 5], 6]]), [2, 3, 5, 6]);

        assert.deepEqual(fn([]), []);
        assert.deepEqual(fn([1, [2, 3], 4, 5]), [1, 2, 3, 4, 5]);
        assert.deepEqual(fn([1, [2, [3, [4]], 5]]), [1, 2, 3, 4, 5]);
        assert.deepEqual(fn([1, [2, 3], [4, 5]]), [1, 2, 3, 4, 5]);
        assert.deepEqual(fn([1, [[2, 3], [4, 5]]]), [1, 2, 3, 4, 5]);
    });
})();
