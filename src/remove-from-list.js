const { NotImplementedError } = require('../extensions/index.js');
// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */

function ListElem(x) {
  return {
    value : x,
    next : null,
  }  
}

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  add(value) {
    if (this.length === 0) {
      this.head = ListElem(value);
    } else {
      let current = this.head;

      while (current.next) {
        current = current.next;
      }

      current.next = ListElem(value);
    }

    this.length += 1;
  }
}

function removeKFromList(l, k) {
  let linkedList = new LinkedList();
  let lArr = [];
  
  while (l) {
    lArr.push(l.value);
    l = l.next;
  }
  
  lArr = lArr.filter(elem => elem !== k);
  
  for (let elem of lArr) {
    linkedList.add(elem);
  }

  return linkedList.head;
}

// function removeKFromList(l, k) {
//   while (l.value === k) { 
//     l = l.next 
  
//   }

//   let tmp = l;
  
//   while (tmp.next) {
//     if (tmp.next.value === k) {
//       tmp.next = tmp.next.next
//     } else {
//       tmp = tmp.next;
//     }
//   } 

//   return l;
// }

module.exports = {
  removeKFromList
};
