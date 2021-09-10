function binaryTreeDiameter(tree) {
  return helper(tree).diameter;
}

function helper(tree) {
  if (!tree) {
    return { height: 0, diameter: 0 };
  }
  let treeLeftInfo = helper(tree.left);
  let treeRightInfo = helper(tree.right);

  let currentHeight = Math.max(treeLeftInfo.height, treeRightInfo.height) + 1;
  let longestPathThroughRoot = treeLeftInfo.height + treeRightInfo.height;
  let longestPathWithoutRoot = Math.max(
    treeLeftInfo.diameter,
    treeRightInfo.diameter
  );
  let currentMaxDiameter = Math.max(
    longestPathThroughRoot,
    longestPathWithoutRoot
  );
  return { height: currentHeight, diameter: currentMaxDiameter };
}
