function inOrderTraversal(tree, arr) {
  if (!tree) {
    return;
  }
  inOrderTraversal(tree.left, arr);
  arr.push(tree.value);
  inOrderTraversal(tree.right, arr);
  return arr;
}
