//O(n^2) time 0(n) space
function reconstructBst(preOrderValues) {
  if (preOrderValues.length === 0) {
    return null;
  }

  let currentValue = preOrderValues[0];
  let rightTreeIndex = array.length;
  for (let i = 1; i < preOrderValues.length; i++) {
    if (preOrderValues[i] >= currentValue) {
      rightTreeIndex = i;
      break;
    }
  }
  let leftTree = reconstructBst(preOrderValues.slice(1, rightTreeIndex));
  let rightTree = reconstructBst(preOrderValues.slice(rightTreeIndex));

  return new Bst(currentValue, leftTree, rightTree);
}
