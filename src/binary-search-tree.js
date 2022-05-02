const { NotImplementedError } = require("../extensions/index.js");

const { Node } = require("../extensions/list-tree.js");

// class Node {
//   constructor(data) {
//     this.data = data;
//     this.left = null;
//     this.right = null;
//   }
// }

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  constructor() {
    this.tree = null;
  }

  root() {
    return this.tree;
  }

  recursionAdd(data, node) {
    if (data > node.data) {
      if (!node.right) {
        node.right = new Node(data);
      } else {
        this.recursionAdd(data, node.right);
      }
    } else {
      if (!node.left) {
        node.left = new Node(data);
      } else {
        this.recursionAdd(data, node.left);
      }
    }
  }

  add(data) {
    if (!this.tree) {
      this.tree = new Node(data);
    } else {
      this.recursionAdd(data, this.tree);
    }
  }

  recursionHas(data, node) {
    if (data > node.data) {
      if (!node.right) {
        return false;
      } else {
        return this.recursionHas(data, node.right);
      }
    }

    if (data === node.data) {
      return true;
    }

    if (data < node.data) {
      if (!node.left) {
        return false;
      } else {
        return this.recursionHas(data, node.left);
      }
    }
  }

  has(data) {
    if (!this.tree) {
      return false;
    } else {
      return this.recursionHas(data, this.tree);
    }
  }

  recursionFind(data, node) {
    if (data > node.data) {
      if (!node.right) {
        return null;
      } else {
        return this.recursionFind(data, node.right);
      }
    }

    if (data === node.data) {
      return node;
    }

    if (data < node.data) {
      if (!node.left) {
        return null;
      } else {
        return this.recursionFind(data, node.left);
      }
    }
  }

  find(data) {
    if (!this.tree) {
      return null;
    } else {
      return this.recursionFind(data, this.tree);
    }
  }

  remove(data) {
    this.tree = removeNode(this.tree, data);

    function findMinValue(node) {
      if (!node.left) {
        return node;
      } else {
        return findMinValue(node.left);
      }
    }

    function removeNode(node, value) {
      if (!node) {
        return node;
      }
      if (node.data < value) {
        node.right = removeNode(node.right, value);
      }
      if (node.data > value) {
        node.left = removeNode(node.left, value);
      }
      if (node.data === value) {
        if (!node.left) {
          return node.right;
        }
        if (!node.right) {
          return node.left;
        } else {
          let minMode = findMinValue(node.right);
          node.data = minMode.data;
          node.right = removeNode(node.right, minMode.data);
        }
      }
      return node;
    }
  }

  min() {
    if (!this.tree) {
      return null;
    }

    let current = this.tree;
    while (current.left) {
      current = current.left;
    }
    return current.data;
  }

  max() {
    if (!this.tree) {
      return null;
    }

    let current = this.tree;
    while (current.right) {
      current = current.right;
    }
    return current.data;
  }
}

module.exports = {
  BinarySearchTree,
};
