/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    const newNode = new Node(val);

    if (this.tail) {
      // The existing tail's next points to new node
      this.tail.next = newNode;
    } else {
      // If the list is empty, set head to new node
      this.head = newNode;
    }
    // Update the tail to the new node
    this.tail = newNode;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    const newNode = new Node(val);

    if (this.head) {
      //If there is a list, the new node points to the current head
      newNode.next = this.head;
    } else {
      // If the list is empty, set tail to the new node
      this.tail = newNode;
    }
    // Increment the length of the list
    this.length += 1;
  }

  /** pop(): return & remove last item. */

  pop() {
    if (!this.head) {
      // If the list is empty, return null
      return null;
    }
    // If the list has only one node
    if (this.head === this.tail){
      const val = this.head.val;
      this.head = null;
      this.tail = null;
      this.length -= 1;
      return val;
    }
    // If the list has more than one node
    let currentNode = this.head
    while (currentNode.next !== this.tail) {
      currentNode = currentNode.next;
    }

    // Store the value of the last node
    const val = this.tail.val;
    // Update tail to be the second to last node
    this.tail = currentNode;
    // Set the new tail's next to null
    this.tail.next = null;
    // Decrement the length of the list
    this.length -= 1;
    // Return the value of the removed node
    return val;
  }

  /** shift(): return & remove first item. */

shift() {
  if (!this.head) {
      // If the list is empty, return null
      return null;
  }

  // If the list has only one node
  if (this.head === this.tail) {
      const val = this.head.val;
      this.head = null;
      this.tail = null;
      this.length -= 1;
      return val;
  }

  // If the list has more than one node
  const val = this.head.val;    // Store the value of the current head
  this.head = this.head.next;   // Update the head to the next node
  this.length -= 1;             // Decrement the length of the list

  return val;  // Return the value of the removed node
}

  /** getAt(idx): get val at idx. */

getAt(idx) {
  // Start from the head of the list
  let currentNode = this.head;
  let currentIdx = 0;

  // Traverse the list until the desired index or end of the list
  while (currentNode !== null && currentIdx < idx) {
      currentNode = currentNode.next;
      currentIdx++;
  }

  // Check if the node at the given index exists
  if (currentIdx === idx && currentNode !== null) {
      return currentNode.value; // Return the value at the desired index
  } else {
      return null; // Index out of bounds
  }
}

  /** setAt(idx, val): set val at idx to val */
  // OPTION 1: With all the stesp
  setAt(idx, val) {
    //Start fro the head of the list
    let currentNode = this.head;
    let currentIdx = 0;

    // Traverse the list until the desired index or end of the list
    while (currentNode !== null && currentIdx < idx) {
      currentNode = currentNode.next;
      currentIdx++;
    }

    // Check if the node at the given index exists
    if (currentIdx === idx && currentNode !== null) {
      currentNode.value = val;
    } else {
      return null;
    }
  }

  // OPTION 2: Refactored version
  /** setAt(idx, val): set the value at idx to val */

setAt(idx, val) {
  // Use getAt to find the node at the specified index
  const node = this.getAt(idx);

  if (node !== null) {
    node.value = val; // Set the new value
    return node.value; // Return the new value (optional)
  } else {
    return null; // Index not found
  }
}

/** insertAt(idx, val): add node w/val before idx. */

insertAt(idx, val) {
  if (idx === 0) {
      const newNode = new Node(val);
      newNode.next = this.head;
      this.head = newNode;
      return;
  }

  let currentNode = this.head;
  let currentIdx = 0;

  while (currentNode !== null && currentIdx < idx - 1) {
      currentNode = currentNode.next;
      currentIdx++;
  }

  if (currentNode !== null) {
      const newNode = new Node(val);
      newNode.next = currentNode.next;
      currentNode.next = newNode;
  } else {
      return null; // Index out of bounds
  }
}

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    // If index is at the head
    if (idx === 0 && this.head) {
      // Remove the head node
      const removedNode = this.head;
      this.head = this.head.next; // The head node is removed
      return removedNode.value;
    }
    // Find the previous node and the node at the given index
    let prevNode = null;
    let currentNode = this.head;
    let currentIdx = 0;

    while (currentNode !== null && currentIdx < idx) {
      prevNode = currentNode;
      currentNode = currentNode.next;
      currentIdx++;
    }
    if (currentNode !== null) {
      // Update the previous node's next pointer to skil the current node
      prevNode.next = currentNode.next; // Node removed
      return currentNode.value;
    } else {
      return null // Index not found
    }
  }

  /** average(): return an average of all values in the list */

  average() {
   // If the list is empty
   if (this.head === null) {
    return null;
   }

   // Set counters
   let sum = 0;
   let count = 0;
   let currentNode = this.head;

   // Traverse the list
   while (currentNode !== null) {
    // Add value to sum
    sum += currentNode.value;
    // Add to count each node, to get a total of nodes
    count++;
    // What the loop does: move to the next node
    currentNode = currentNode.next;
   }
   // Calculate and return the average
   return sum /count;
  }
}

module.exports = LinkedList;
