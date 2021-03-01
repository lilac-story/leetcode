function searchMatrix(matrix: number[][], target: number): boolean {
    for (let i = 0; i < matrix.length; i++) {
        const row = matrix[i]
        if (row[0] > target) break
        for (let j = 0; j < row.length; j++) {
            if (row[j] > target) break
            if (row[j] === target) return true
        }
    }
    return false
};
