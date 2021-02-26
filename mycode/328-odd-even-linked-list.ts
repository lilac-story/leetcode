/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

 function oddEvenList(head: ListNode | null): ListNode | null {
    let oddHead: ListNode | null = null
    let evenHead: ListNode | null = null
    let oddNode: ListNode = null as any
    let evenNode: ListNode = null as any
    let even = false
    let node = head
    while (node) {
        if (!even) {
            if (oddHead === null) {
                oddHead = node
                oddNode = node
            } else {
                oddNode.next = node
                oddNode = node
            }
        } else {
            if (evenHead === null) {
                evenHead = node
                evenNode = node
            } else {
                evenNode.next = node
                evenNode = node
            }
        }
        node = node.next
        even = !even
    }
    if (!oddHead) return oddHead
    if (evenHead) {
        oddNode.next = evenHead
        evenNode.next = null
    }
    return oddHead
};
