class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = new Node(value); //pointer to the beggining of the list
    this.tail = this.head; //pointer to the end of the list
    this.length = 1;
  }

  append(value) {
    const newNode = new Node(value);
    newNode.prev = this.tail; //inserting value
    this.tail.next = newNode; //inserting value
    this.tail = newNode; //pointing at new value
    this.length++;
    return this;
  }

  prepend(value) {
    const newNode = new Node(value);
    this.head.prev = newNode;
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }

  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }

  insert(index, value) {
    if (index > this.length) {
      return this.append(value);
    }
    if (index === 0) {
      return this.prepend(value);
    }
    let previousNode = this.traverseToValue(index - 1);
    let nextNode = this.traverseToValue(index);
    let newNode = new Node(value);
    newNode.prev = previousNode;
    previousNode.next = newNode;
    newNode.next = nextNode;
    this.length++;
  }

  remove(index) {
    if (index === 0) {
      this.head = this.head.next;
    }
    if (index > this.length) {
      return "Index out of bounds";
    }
    let previousNode = this.traverseToValue(index - 1);
    let nextNode = this.traverseToValue(index + 1);
    previousNode.next = nextNode;
    //nextNode.prev = previousNode;
    this.length--;
  }

  traverseToValue(index) {
    let currentNode = this.head;
    let counter = 0;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }

  reverse() {
    let first = this.head;
    this.tail = this.head;
    let second = this.head.next;
    while (second) {
      let third = second.next;
      second.next = first;
      second.prev = third;
      first = second;
      second = third;
    }
    this.head.next = null;
    this.head = first;
  }
}

const myLinkedList = new LinkedList(1);

myLinkedList.append(2);
myLinkedList.append(3);
myLinkedList.append(4);
myLinkedList.append(5);
// myLinkedList.append(16);
// myLinkedList.prepend(8);
// myLinkedList.insert(1, 97);
// myLinkedList.insert(2, 98);
// myLinkedList.insert(3, 99);
// console.log(myLinkedList.printList());
// myLinkedList.remove(2);
// console.log(myLinkedList.printList());
// myLinkedList.remove(3);
// console.log(myLinkedList.printList());
// myLinkedList.remove(4);
// console.log(myLinkedList.printList());
console.log(myLinkedList.printList());
myLinkedList.reverse();
console.log(myLinkedList.printList());
