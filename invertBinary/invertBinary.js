function invertBinaryTree(tree) {
  let queue = [tree];
  while (queue.length) {
    let curTree = queue.shift();
    if (!curTree) {
      continue;
    }
    //swap
    let temp = curTree.left;
    curTree.left = curTree.right;
    curTree.right = temp;
    //push tree right and tree left to queue
    queue.push(curTree.right, curTree.left);
  }
  return tree;
}
