//O(n)time O(n)space
function reconstructBst(preorderVal) {
  return helper(preorderVal);
}

function helper(
  preorderVal,
  history = { idx: 0 },
  lowerBound = -Infinity,
  upperBound = Infinity
) {
  if (history.idx === preorderVal.length) {
    return null;
  }
  let currentValue = preorderVal[history.idx];
  if (currentValue < lowerBound || currentValue >= upperBound) {
    return null;
  }
  history.idx++;
  let leftSubTree = helper(preorderVal, history, lowerBound, currentValue);
  let rightSubTree = helper(preorderVal, history, currentValue, upperBound);

  return new BST(currentValue, leftSubTree, rightSubTree);
}
