class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
    } else {
      let currentNode = this.root;
      while (true) {
        if (value < currentNode.value) {
          // Left Side
          if (!currentNode.left) {
            currentNode.left = newNode;
            break;
          }
          currentNode = currentNode.left;
        } else {
          // Right Side
          if (!currentNode.right) {
            currentNode.right = newNode;
            break;
          }
          currentNode = currentNode.right;
        }
      }
    }
  }
  lookup(value) {
    if (!this.root) {
      return false;
    } else {
      let currentNode = this.root;
      while (currentNode) {
        if (value < currentNode.value) {
          // Left Side
          currentNode = currentNode.left;
        } else if (value > currentNode.value) {
          currentNode = currentNode.right;
        } else if (currentNode.value === value) {
          return currentNode;
        }
      }
      return "not find any item";
    }
  }

  remove() {
    if (!this.root) {
      return false;
    } else {
      let currentNode = this.root;
      let parentNode = null;
      while (currentNode) {
        if (value < currentNode.value) {
          parentNode = currentNode;
          currentNode = currentNode.left;
        } else if (value > currentNode.value) {
          parentNode = currentNode;
          currentNode = currentNode.right;
        } else if (currentNode.value === value) {
          if (currentNode.right === null) {
            if (parentNode === null) {
              this.root = currentNode.left;
            } else {
              if (currentNode.value < parentNode.value) {
                parentNode.left = currentNode.left;
              } else if (currentNode.value > parentNode.value) {
                parentNode.right = currentNode.left;
              }
            }
          } else if (currentNode.right.left === null) {
            if (parentNode === null) {
              this.root = currentNode.left;
            } else {
              currentNode.right.left = currentNode.left;

              if (currentNode.value < parentNode.value) {
                parentNode.left = currentNode.right;
              } else if (currentNode.value > parentNode.value) {
                parentNode.right = currentNode.right;
              }
            }
          } else {
            let leftMost = currentNode.right.left;
            let leftmostParent = currentNode.right;

            while (leftMost.left !== null) {
              leftmostParent = leftMost;
              leftMost = leftMost.left;
            }

            leftmostParent.left = leftMost.right;
            leftMost.left = currentNode.left;
            leftMost.right = currentNode.right;

            if (parentNode === null) {
              this.root = leftMost;
            } else {
              if (currentNode.value < parentNode.value) {
                parentNode.left = leftMost;
              } else if (currentNode.value > parentNode.value) {
                parentNode.right = leftMost;
              }
            }
          }
        }
        return true;
      }
    }
  }
}

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(20);
tree.insert(4);
tree.insert(1);
tree.insert(6);
tree.insert(15);
tree.insert(70);
tree.insert(18);

console.log(tree.lookup(124));
console.log(tree);
