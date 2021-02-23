function lastStoneWeight(stones: number[]): number {
    const heap: number[] = []
    const parent = (index: number) => (Math.floor((index + 1) / 2) - 1)
    const leftChild = (index: number) => ((index + 1) * 2) - 1
    const rightChild = (index: number) => (index + 1) * 2
    const swim = (index: number) => {
        while (index > 0 && heap[parent(index)] < heap[index]) {
            const swp = heap[index]
            heap[index] = heap[parent(index)]
            heap[parent(index)] = swp
            index = parent(index)
        }
    }
    const sink = (index: number) => {
        while (leftChild(index) < heap.length) {
            let bigger = leftChild(index)
            if (rightChild(index) < heap.length &&
                heap[rightChild(index)] > heap[bigger]
               ) {
                bigger = rightChild(index)
            }
            if (heap[bigger] > heap[index]) {
                const swp = heap[index]
                heap[index] = heap[bigger]
                heap[bigger] = swp
                index = bigger
                continue
            } else {
                break
            }
        }
    }
    const push = (stone: number) => {
        heap.push(stone)
        swim(heap.length - 1)
    }
    const smash = () => {
        const x = 0
        const y = heap.length > 2 && heap[2] > heap[1] ? 2 : 1
        const hit = heap[x] - heap[y]
        heap[0] = heap.pop() as number
        sink(0)
        if (hit === 0) {
            if (heap.length > 1) {
                heap[0] = heap.pop() as number
                sink(0)
            } else {
                heap.pop()
            }
        } else {
            heap[0] = hit
            sink(0)
        }
    }
    for (const s of stones) {
        push(s)
    }
    while (heap.length > 1) {
        smash()
    }
    return heap[0] ?? 0
};
