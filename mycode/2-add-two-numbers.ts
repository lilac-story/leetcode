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

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let root = null
    let c = 0
    let o: ListNode | null = root
    while (!(l1 === null && l2 === null && c === 0)) {
        const d = ((l1?.val ?? 0) + (l2?.val ?? 0) + c) % 10
        c = Math.floor(((l1?.val ?? 0) + (l2?.val ?? 0) + c) / 10)
        if (o === null) {
            root = new ListNode(d)
            o = root
        } else {
            o.next = new ListNode(d)
            o = o.next
        }
        l1 = l1?.next ?? null
        l2 = l2?.next ?? null
    }
    return root
};
