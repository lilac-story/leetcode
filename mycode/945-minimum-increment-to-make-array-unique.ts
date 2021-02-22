function minIncrementForUnique(A: number[]): number {
    let mi = 0
    A.sort((a, b) => (a - b))
    for (let i = 1; i < A.length; i++) {
        if (A[i] < A[i - 1] + 1) {
            mi += A[i - 1] + 1 - A[i]
            A[i] = A[i - 1] + 1
        }
    }
    return mi
};
