function maxSubarraySumCircular(A: number[]): number {
    // let d[i] to be maxSubarray end at i
    // d[i] depends on A[i], d[i-1]
    // let c[i] to be sum from 0 to i
    // let e[i] to be maxSubarray start at k >= i end at A.length - 1
    let d: number[] = []
    let c: number[] = []
    let e: number[] = []
    let sum = 0
    for (let i = 0; i < A.length; i++) {
        sum += A[i]
        c[i] = sum
        if (d[i-1] === undefined || d[i-1] < 0) {
            d[i] = A[i]
        } else {
            d[i] = d[i-1] + A[i]
        }
    }
    let max = -Infinity
    sum = 0
    for (let i = A.length - 1; i >= 0; i--) {
        sum += A[i]
        max = Math.max(max, sum)
        e[i] = max
    }
    max = -Infinity
    for (let i = 0; i < A.length; i++) {
        d[i] = Math.max(d[i], c[i] + (e[i + 1] ?? 0))
        max = Math.max(max, d[i])
    }
    return max
};
