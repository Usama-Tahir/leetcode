/**
 * You are given the heads of two sorted linked lists list1 and list2.
 * Merge the two lists in a one sorted list.
 * The list should be made by splicing together the nodes of the first two lists.
 * Return the head of the merged linked list.
 *
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
const mergeTwoLists = function (list1, list2) {
  const list1Len = list1.length;
  const list2Len = list2.length;
  let list1Iterator = 0;
  let list2Iterator = 0;
  const list = [];
  while (list1Iterator < list1Len || list2Iterator < list2Len) {
    if (list1Iterator === list1.length) {
      for (let i = list2Iterator; i < list2Len; i++) {
        list.push(list2[i]);
        list2Iterator++;
      }
    } else if (list2Iterator === list2.length) {
      for (let i = list1Iterator; i < list1Len; i++) {
        list.push(list1[i]);
        list1Iterator++;
      }
    } else {
      if (list1[list1Iterator] > list2[list2Iterator]) {
        list.push(list2[list2Iterator], list1[list1Iterator]);
        list1Iterator++;
        list2Iterator++;
      } else {
        list.push(list1[list1Iterator], list2[list2Iterator]);
        list1Iterator++;
        list2Iterator++;
      }
    }
  }
  return list;
};

console.log(mergeTwoLists([], [0]))