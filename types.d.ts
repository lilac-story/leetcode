declare global {
    namespace globalThis {
        class ListNode {
            val: number
            next: ListNode | null
            constructor(val?: number, next?: ListNode | null)
        }
    }
}

export {}