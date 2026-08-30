class HashTable {
  hashKey = [];
  bucket = [];
  index = 0;

  hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }

    return hash % this.bucket.length;
  }
  set(key, value) {
    for (let i = 0; i < this.hashKey.length; i++) {
      if (this.hash(this.hashKey[i]) === this.hash(key)) {
        this.index = i;
      } else {
        this.index = this.bucket.length - 1;
      }
    }
    this.hashKey.push(key);
    this.bucket[this.index] = [
      ...(this.bucket[this.index] || []),
      { key, value },
    ];
    return 'done';
  }

  get(key) {
    for (let i = 0; i < this.hashKey.length; i++) {
      if (this.bucket[i] && this.bucket[i].key === key) {
        return this.bucket[i].value;
      } else {
        return undefined;
      }
    }
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
