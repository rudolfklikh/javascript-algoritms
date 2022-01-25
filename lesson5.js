// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//     this.prev = null;
//   }
// }

// class DoubleLinkedList {
//   constructor(value) {
//     this.head = {
//       value,
//       next: null,
//       prev: null,
//     };
//     this.tail = this.head;
//     this.length = 1;
//   }

//   apend(value) {
//     const newNode = new Node(value);
//     this.tail.next = newNode;
//     newNode.prev = this.tail;
//     this.tail = newNode;
//     this.length++;
//     return this;
//   }
//   prepend(value) {
//     const newNode = new Node(value);
//     newNode.next = this.head;
//     this.head.prev = newNode;
//     this.head = newNode;

//     this.length++;
//   }
//   printList() {
//     const array = [];
//     let currentNode = this.head;
//     while (currentNode !== null) {
//       array.push(currentNode.value);
//       currentNode = currentNode.next;
//     }
//     return array;
//   }
//   insert(index, value) {
//     if (index === 0) {
//       this.prepend(value);
//       return this.printList();
//     } else if (index >= this.length) {
//       return this.apend(value);
//     } else {
//       const newNode = new Node(value);
//       let currentNode = this.head;
//       let prevNode = this.head;
//       for (let i = 0; i < index; i++) {
//         if (i === index - 1) {
//           prevNode = currentNode;
//         }
//         currentNode = currentNode.next;
//       }
//       prevNode.next = newNode;
//       newNode.prev = prevNode;
//       newNode.next = currentNode;
//       currentNode.prev = newNode;
//       this.length++;
//     }
//   }

//   remove(index) {
//     if (index >= this.length) {
//       let currentNode = this.head;
//       let prevNode = this.head;
//       for (let i = 0; i < this.length - 1; i++) {
//         if (i === this.length - 2) {
//           prevNode = currentNode;
//         }
//         currentNode = currentNode.next;
//       }
//       prevNode.next = null; 
//       prevNode.prev = this.tail.prev.prev;
//       this.tail = prevNode;
//       this.length--;
//     } else {
//       let currentNode = this.head;
//       let prevNode = this.head;
//       for (let i = 0; i < index; i++) {
//         if (i === index - 1) {
//           prevNode = currentNode;
//         }
//         currentNode = currentNode.next;
//       }
//       prevNode.next = currentNode.next;
//       currentNode.next.prev = prevNode;
//       this.length--;
//     }
//   }

//   reverse() {
//       if (!this.head.next) {
//           return this.head;
//       }
//       let first = this.head;
//       this.tail = this.head;
//       let second = first.next;
//       while(second) {
//           const temp = second.next;
//           second.next = first;
//           first = second;
//           second = temp;
//       }
//       this.head.next = null;
//       this.head = first;

//   }
// }

// const myLinkedList = new DoubleLinkedList(10);
// console.log(myLinkedList, "Linked List");
// myLinkedList.apend(5);
// myLinkedList.apend(16);
// myLinkedList.prepend(1);
// myLinkedList.insert(3, 99);
// myLinkedList.reverse();
// console.log(myLinkedList.printList());
