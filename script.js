class HashTable {
  // Store key-value pairs inside fixed-size buckets.
  bucket = [[], [], [], [], [], [], [], [], [], []];

  // Define the total number of available buckets.
  capacity = 10;

  hash(key) {
    // Start the hash value at zero.
    let hash = 0;

    // Convert each character into its character code and add it to the hash.
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }

    // Convert the hash value into a valid bucket index.
    return hash % this.capacity;
  }

  set(key, value) {
    // Calculate which bucket should contain this key.
    const bucketIndex = this.hash(key);

    // Search the bucket for an existing key.
    for (const item of this.bucket[bucketIndex]) {
      // If the key already exists, update its value.
      if (item.key === key) {
        item.value = value;
        return 'done';
      }
    }

    // Add a new key-value pair to the bucket.
    // This also handles collisions using separate chaining.
    this.bucket[bucketIndex].push({ key, value });

    return 'done';
  }

  get(key) {
    // Calculate which bucket may contain the key.
    const bucketIndex = this.hash(key);

    // Search only inside the calculated bucket.
    for (const item of this.bucket[bucketIndex]) {
      // Return the value when the requested key is found.
      if (item.key === key) {
        return item.value;
      }
    }

    // Return undefined when the key does not exist.
    return undefined;
  }
}

const table = new HashTable();

table.set('name', 'Amin');
table.set('age', 20);
table.set('role', 'Frontend Developer');

console.log(table.get('name'));
// Expected output: "Amin"

console.log(table.get('age'));
// Expected output: 20

console.log(table.get('unknown'));
// Expected output: undefined
