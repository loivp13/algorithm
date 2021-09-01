//best case time O(logn)
//best case space O(logn)
//worst case time O(n)
//worst case space O(n)
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    if (value < this.value) {
      if (this.left === null) {
        this.left = new BST(value);
      } else {
        this.left.insert(value);
      }
    } else {
      if (this.right === null) {
        this.right = new BST(value);
      } else {
        this.right.insert(value);
      }
    }
    return this;
  }

  contains(value) {
    if (value === this.value) {
      return true;
    }

    if (value < this.value) {
      if (this.left === null) {
        return false;
      } else {
        return this.left.contains(value);
      }
    } else {
      if (this.right === null) {
        return false;
      } else {
        return this.right.contains(value);
      }
    }
  }
  getMinValue() {
    if (this.left) {
      return this.left.getMinValue();
    } else {
      return this.value;
    }
  }

  remove(value, currentNode = this, parentNode = null) {
    if (value < currentNode.value) {
      parentNode = currentNode;
      currentNode = currentNode.left;
      this.left.remove(value, currentNode, parentNode);
    } else if (value > currentNode.value) {
      parentNode = currentNode;
      currentNode = currentNode.right;
      this.right.remove(value, currentNode, parentNode);
    } else {
      if (currentNode.right && currentNode.left) {
        currentNode.value = currentNode.right.getMinValue();
        parentNode = currentNode;
        currentNode = currentNode.right;
        currentNode.remove(parentNode.value, currentNode, parentNode);
      } else if (!parentNode) {
        if (currentNode.left) {
          currentNode.value = currentNode.left.value;
          currentNode.right = currentNode.left.right;
          currentNode.left = currentNode.left.left;
        } else if (currentNode.right) {
          currentNode.value = currentNode.right.value;
          currentNode.left = currentNode.right.left;
          currentNode.right = currentNode.right.right;
        } else {
          return this;
        }
      } else if (parentNode.left === currentNode) {
        parentNode.left = currentNode.left
          ? currentNode.left
          : currentNode.right;
      } else if (parentNode.right === currentNode) {
        parentNode.right = currentNode.left
          ? currentNode.left
          : currentNode.right;
      }
    }
    return this;
  }
}
