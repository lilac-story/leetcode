function maximalSquare(matrix: string[][]): number {
    // let d[i][j] to be the side length of maximalSquare start at [i, j]
    const d: number[][] = []
    let max = 0
    for (let i = matrix.length - 1; i >= 0; i--) {
        d[i] = []
        for (let j = matrix[0].length - 1; j >= 0; j--) {
            if (i === matrix.length - 1 || j === matrix[0].length - 1) {
                d[i][j] = matrix[i][j] === '1' ? 1 : 0
                max = Math.max(max, d[i][j])
                continue
            }
            if (matrix[i][j] === '0') {
                d[i][j] = 0
                continue
            }
            const min = Math.min(d[i+1][j], d[i][j+1])
            const canPlus1 = matrix[i+min][j+min] === '1'
            d[i][j] = canPlus1 ? min + 1 : min
            if (d[i][j] === 0) d[i][j] = 1
            max = Math.max(max, d[i][j])
        }
    }
    return max * max
};
