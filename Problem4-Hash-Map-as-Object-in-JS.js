class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  set(key, value) {
    let address = this._hash(key);
    if (!this.data[address]) {
      // Create one empty array on the memory address
      this.data[address] = [];
    }
    this.data[address].push([key, value]); // Push new key/value without erasing previous value
    return this.data; // in case of collision
  }

  get(key) {
    let address = this._hash(key);
    const currentBucket = this.data[address]; //currentBucket in case hash collisions save different arrays on the same address array
    if (currentBucket) {
      //undefined if nothing exists
      for (let i = 0; i < currentBucket.length; i++) {
        //inside that address yet
        if (currentBucket[i][0] === key) {
          // check if key value is the same... not the hash from the key value resulted from the collision
          return currentBucket[i][1];
        }
      }
    }
    return undefined; // Return undefined if the key is not found
  }

  keys() {
    const keysArray = [];
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]) {
        keysArray.push(this.data[i][0][0]);
      }
    }
    return keysArray;
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      // does not report collision keys.. need fix
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }
}

const myHashTable = new HashTable(50);
myHashTable.set("grapes", 10000);
myHashTable.set("apples", 9);
myHashTable.set("bananas", 24);
// console.log(myHashTable.get("apples")); // 9
// console.log(myHashTable.get("bananas")); // 13
// console.log(myHashTable.get("oranges")); // undefined
console.log(myHashTable);
console.log(myHashTable.keys());
