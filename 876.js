/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function (head) {
  let node = head;
  let length = 0;

  while (node) {
    node = node.next;
    length++;
  }

  // Calculate the position of the middle node
  const pos = Math.floor(length / 2);
  let count = 0;
  // Reset the node to the head node
  node = head;

  while (count < pos) {
    node = node.next;
    count++;
  }

  return node;
};
