// best case time O(logn)
// best case space O(1)
// worst case time O(n)
// worst case space o(1)
class BST {
  constructor(value) {
    this.right = null;
    this.left = null;
    this.value = value;
  }
  insert(value) {
    let currNode = this;
    while (currNode) {
      let curVal = currNode.value;
      if (value < curVal) {
        if (currNode.left) {
          currNode = currNode.left;
        } else {
          currNode.left = new BST(value);
          break;
        }
      } else if (value >= curVal) {
        if (currNode.right) {
          currNode = currNode.right;
        } else {
          currNode.right = new BST(value);
          break;
        }
      }
    }
    return this;
  }
  contains(value) {
    let currNode = this;
    while (currNode) {
      let curVal = currNode.value;
      if (value < curVal) {
        currNode = currNode.left;
      } else if (value > curVal) {
        currNode = currNode.right;
      } else {
        return true;
      }
    }
    return false;
  }
  findMinValue() {
    let curNode = this;
    while (curNode.left) {
      curNode = curNode.left;
    }
    return curNode.value;
  }
  remove(value, parentNode = null) {
    let currNode = this;
    while (currNode) {
      let curVal = currNode.value;
      if (value < curVal) {
        parentNode = currNode;
        currNode = currNode.left;
      } else if (value > curVal) {
        parentNode = currNode;
        currNode = currNode.right;
      } else {
        //handle if 2 children
        if (currNode.right && currNode.left) {
          currNode.value = currNode.right.findMinValue();
          currNode.right.remove(currNode.value, currNode);
          //handle if is parentNode === null (is rootNode)
        } else if (!parentNode) {
          if (currNode.right) {
            currNode.value = currNode.right.value;
            currNode.left = currNode.right.left;
            currNode.right = currNode.right.right;
          } else if (currNode.left) {
            currNode.value = currNode.left.value;
            currNode.right = currNode.left.right;
            currNode.left = currNode.left.left;
          }
          //handle if only 1 child || no child
        } else {
          if (parentNode.left === currNode) {
            if (currNode.right) {
              parentNode.left = currNode.right;
            } else {
              parentNode.left = currNode.left;
            }
          } else {
            if (currNode.right) {
              parentNode.right = currNode.right;
            } else {
              parentNode.right = currNode.left;
            }
          }
        }
        break;
      }
    }
  }
}
