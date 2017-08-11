function findClonedElement(rootElement, clonedRootElement, element) {
    const path = [];
    while (element !== rootElement) {
        path.push(Array.from(element.parentNode.children).indexOf(element));
        element = element.parentNode;
    }

    let el = clonedRootElement;
    for (let i = path.length - 1; i >= 0; i--) {
        el = el.children[path[i]];
    }
    return el;
}
