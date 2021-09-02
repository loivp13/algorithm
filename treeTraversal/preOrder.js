function preOrderTraversal(tree, arr) {
  if (!tree) {
    return;
  }
  arr.push(tree.value);
  preOrderTraversal(tree.left, arr);
  preOrderTraversal(tree.right, arr);
  return arr;
}
