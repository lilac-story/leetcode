function numIslands(grid: string[][]): number {
    const m = grid.length, n = grid[0].length
    const dfs = (i: number, j: number) => {
        if (i < 0 || i >= m) return
        if (j < 0 || j >= n) return
        if (grid[i][j] === '1') {
            grid[i][j] = '0'
            dfs(i - 1, j)
            dfs(i + 1, j)
            dfs(i, j - 1)
            dfs(i, j + 1)
        }
    }
    let islands = 0
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === '1') {
                islands++
                dfs(i, j)
            }
        }
    }
    return islands
};
