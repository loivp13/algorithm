function preOrderTraversal(tree, arr) {
  if (!tree) {
    return;
  }
  preOrderTraversal(tree.left, arr);
  preOrderTraversal(tree.right, arr);
  arr.push(tree.value);
  return arr;
}
