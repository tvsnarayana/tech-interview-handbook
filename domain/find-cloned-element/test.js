(function () {
  const tree = $(`
    <div>
      <div>
        <span></span>
      </div>
      <div>
        <p></p>
        <span></span>
        <div>
          <span id="target"></span>
        </div>
      </div>
    </div>
  `);
  const clonedTree = $(`
    <div>
      <div>
        <span></span>
      </div>
      <div>
        <p></p>
        <span></span>
        <div>
          <span id="target"></span>
        </div>
      </div>
    </div>
  `);
  const target = tree.find('#target');
  const clonedTarget = clonedTree.find('#target');
  console.log(findClonedElement(tree[0], clonedTree[0], target[0]) === clonedTarget[0]);
})();

(function () {
  const tree = $(`
    <div>
      <div>
        <span>
          <span>
            <span>
              <span id="target"></span>
            </span>
          </span>
        </span>
      </div>
    <div>
  `);
  const clonedTree = $(`
    <div>
      <div>
        <span>
          <span>
            <span>
              <span id="target"></span>
            </span>
          </span>
        </span>
      </div>
    <div>
  `);
  const target = tree.find('#target');
  const clonedTarget = clonedTree.find('#target');
  console.log(findClonedElement(tree[0], clonedTree[0], target[0]) === clonedTarget[0]);
})();
