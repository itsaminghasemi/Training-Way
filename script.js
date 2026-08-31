// Represents a single node in the Binary Search Tree.
class Node {
  constructor(value) {
    // Store the value contained in this node.
    this.value = value;

    // Reference to the left child.
    this.left = null;

    // Reference to the right child.
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    // The tree starts without a root node.
    this.root = null;
  }

  insert(value) {
    // Create a new node for the value.
    const newNode = new Node(value);

    // If the tree is empty, the new node becomes the root.
    if (this.root === null) {
      this.root = newNode;
      return;
    }

    // Start traversal from the root.
    let currentNode = this.root;

    // Continue until the correct position is found.
    while (true) {
      // Smaller values belong in the left subtree.
      if (value < currentNode.value) {
        // If there is no left child, insert the new node here.
        if (!currentNode.left) {
          currentNode.left = newNode;
          break;
        }

        // Otherwise, continue searching in the left subtree.
        currentNode = currentNode.left;
      } else {
        // Equal or larger values belong in the right subtree.
        if (!currentNode.right) {
          currentNode.right = newNode;
          break;
        }

        // Otherwise, continue searching in the right subtree.
        currentNode = currentNode.right;
      }
    }
  }

  contains(value) {
    // Start searching from the root.
    let currentNode = this.root;

    // Continue while there is a node to inspect.
    while (currentNode) {
      // Search the left subtree for smaller values.
      if (value < currentNode.value) {
        currentNode = currentNode.left;
      }
      // Search the right subtree for larger values.
      else if (value > currentNode.value) {
        currentNode = currentNode.right;
      }
      // The value matches the current node.
      else {
        return true;
      }
    }

    // The value does not exist in the tree.
    return false;
  }
}

const tree = new BinarySearchTree();

tree.insert(8);
tree.insert(3);
tree.insert(10);
tree.insert(1);
tree.insert(6);
tree.insert(14);
tree.insert(4);
tree.insert(7);

console.log(tree.contains(6));
// Expected output: true

console.log(tree.contains(14));
// Expected output: true

console.log(tree.contains(20));
// Expected output: false
