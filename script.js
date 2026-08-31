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

  // Stores traversal results.
  sortStorage = [];

  useStorage(currentRoot) {
    // Add the current node's value to the traversal result.
    this.sortStorage.push(currentRoot.value);
  }

  resetStorage() {
    // Clear the previous traversal result.
    this.sortStorage = [];
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

  preOrder() {
    // Clear the previous traversal result.
    this.resetStorage();

    // Start recursive pre-order traversal from the root.
    this.traversalPreOrder(this.root);

    // Return the traversal result.
    return this.sortStorage;
  }

  traversalPreOrder(currentRoot) {
    // Stop when there is no node.
    if (currentRoot === null) {
      return;
    }

    // Visit the current node first.
    this.useStorage(currentRoot);

    // Traverse the left subtree.
    this.traversalPreOrder(currentRoot.left);

    // Traverse the right subtree.
    this.traversalPreOrder(currentRoot.right);
  }

  inOrder() {
    // Clear the previous traversal result.
    this.resetStorage();

    // Start recursive in-order traversal from the root.
    this.traversalInOrder(this.root);

    // Return the traversal result.
    return this.sortStorage;
  }

  traversalInOrder(currentRoot) {
    // Stop when there is no node.
    if (currentRoot === null) {
      return;
    }

    // Traverse the left subtree first.
    this.traversalInOrder(currentRoot.left);

    // Visit the current node.
    this.useStorage(currentRoot);

    // Traverse the right subtree.
    this.traversalInOrder(currentRoot.right);
  }

  postOrder() {
    // Clear the previous traversal result.
    this.resetStorage();

    // Start recursive post-order traversal from the root.
    this.traversalPostOrder(this.root);

    // Return the traversal result.
    return this.sortStorage;
  }

  traversalPostOrder(currentRoot) {
    // Stop when there is no node.
    if (currentRoot === null) {
      return;
    }

    // Traverse the left subtree first.
    this.traversalPostOrder(currentRoot.left);

    // Traverse the right subtree.
    this.traversalPostOrder(currentRoot.right);

    // Visit the current node after both subtrees.
    this.useStorage(currentRoot);
  }

  breadthFirst() {
    // Clear the previous traversal result.
    this.resetStorage();

    // Store nodes waiting to be processed.
    const queue = [];

    // Add the root if the tree is not empty.
    if (this.root) {
      queue.push(this.root);
    }

    // Track the next node to process.
    let queueIndex = 0;

    // Continue until every queued node has been processed.
    while (queueIndex < queue.length) {
      // Get the next node without removing it from the array.
      const currentRoot = queue[queueIndex];

      // Move the queue pointer forward.
      queueIndex++;

      // Store the current node's value.
      this.sortStorage.push(currentRoot.value);

      // Add the left child to the queue.
      if (currentRoot.left) {
        queue.push(currentRoot.left);
      }

      // Add the right child to the queue.
      if (currentRoot.right) {
        queue.push(currentRoot.right);
      }
    }

    // Return the breadth-first traversal result.
    return this.sortStorage;
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

console.log(tree.preOrder());
// Expected output: [8, 3, 1, 6, 4, 7, 10, 14]

console.log(tree.inOrder());
// Expected output: [1, 3, 4, 6, 7, 8, 10, 14]

console.log(tree.postOrder());
// Expected output: [1, 4, 7, 6, 3, 14, 10, 8]

console.log(tree.breadthFirst());
// Expected output: [8, 3, 10, 1, 6, 14, 4, 7]
