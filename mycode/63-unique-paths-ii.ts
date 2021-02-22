function uniquePathsWithObstacles(obstacleGrid: number[][]): number {
    // let p[i][j] to be paths to Finish at point grid[i][j]
    if (obstacleGrid[0][0] === 1) return 0
    let p = JSON.parse(JSON.stringify(obstacleGrid))
    for (let i = p.length - 1; i >= 0; i--) {
        for (let j = p[i].length - 1; j >= 0; j--) {
            p[i][j] = (i === p.length - 1 && j === p[i].length - 1 )
                ? obstacleGrid[i][j] === 1
                    ? 0 : 1
                : 0
            if (!(i >= p.length - 1 || obstacleGrid[i + 1][j] === 1)) {
                p[i][j] += p[i + 1][j] ?? 0
            }
            if (!(j >= p[i].length -1 || obstacleGrid[i][j + 1] === 1)) {
                p[i][j] += p[i][j + 1] ?? 0
            }
        }
    }
    return p[0][0]
};
