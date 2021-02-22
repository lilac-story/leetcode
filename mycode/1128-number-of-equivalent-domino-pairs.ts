function numEquivDominoPairs(dominoes: number[][]): number {
    const dSum = dominoes.map(d => {
        if (d[0] <= d[1]) return d[0] * 10 + d[1]
        return d[1] * 10 + d[0]
    })
    const dSumMap: { [key: number]: number } = {}
    for (const d of dSum) {
        if (!dSumMap[d]) dSumMap[d] = 0
        dSumMap[d]++
    }
    let sum = 0
    for (const v of Object.values(dSumMap)) {
        sum += (v - 1) * v / 2
    }
    return sum
};
