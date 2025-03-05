class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  peek() {
    if (this.length === 0) {
      return;
    }
    return this.top;
  }

  push(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.top = newNode;
      this.bottom = newNode;
      this.bottom.next = null;
    }
    newNode.next = this.top;
    this.top = newNode;
    this.length++;
  }

  pop() {
    if (this.length === 0) {
      return;
    }
    const tempVar = this.top;
    this.top = this.top.next;
    this.length--;
    return tempVar;
  }

  //isEmpty
}

const myStack = new Stack();
myStack.push("Discord");
myStack.push("Reddit");
myStack.push("FB");
myStack.push("Whatsapp Web");
myStack.push("IG");
myStack.pop();
console.log(myStack.peek());
console.log(myStack);
