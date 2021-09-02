function validateBst(tree) {
  return helper(tree);
}

function helper(node, minValue = -Infinity, maxValue = Infinity) {
  if (!node) {
    return true;
  } else if (minValue > node.value || maxValue <= node.value) {
    return false;
  }

  let isValid = helper(node.left, minValue, node.value);

  return isValid && helper(node.right, node.value, maxValue);
}
