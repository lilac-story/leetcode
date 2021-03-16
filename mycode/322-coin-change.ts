function coinChange(coins: number[], amount: number): number {
    // let c[i,j] to be solution for coins[0]~coins[i], amount j
    const c: number[][] = []
    for (let i = 0; i < coins.length; i++) {
        c.push([])
        for (let j = 0; j <= amount; j++) {
            const coin = coins[i]
            const d = Math.floor(j / coin)
            const m = j % coin
            c[i][j] = -1
            for (let k = 0; k <= d; k++) {
                const p = m + k * coin
                const q = j - p
                if (i === 0 && p == 0) {
                    if (c[i][j] === -1 || q / coin < c[i][j]) {
                        c[i][j] = q / coin
                    }
                } else if (i !== 0 && c[i-1][p] !== -1) {
                    if (c[i][j] === -1 || c[i-1][p] + q / coin < c[i][j]) {
                        c[i][j] = c[i-1][p] + q / coin
                    }
                }
            }
        }
    }
    return c[coins.length - 1][amount]
};
