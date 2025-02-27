export class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }
  get(index) {
    return this.data[index];
  }
  push(value) {
    this.data[this.length] = value;
    this.length++;
    return this.length;
  }
  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }
  delete(index) {
    const item = this.data[index];
    delete this.data[index];
    this.shiftItems(index);
    return item;
  }
  shiftItems(index) {
    for (let i = index; i < this.length - 1; i++) {
      //Shift items to left
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1]; //Delete last item
    this.length--;
  }
}

// [a , b , c , d , e]
//  0   1   2   3   4

const newArray = new MyArray();
newArray.push("a");
newArray.push("b");
newArray.push("c");
newArray.push("d");
newArray.push("e");
newArray.delete(2);
console.log(newArray);
console.log(newArray.length);
