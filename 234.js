/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  let node = head;
  const flatList = [];

  while (node) {
    flatList.push(node.val);
    node = node.next;
  }

  return flatList.toString() === flatList.reverse().toString();
};
