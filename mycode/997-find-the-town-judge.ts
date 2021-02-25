function findJudge(N: number, trust: number[][]): number {
    if (N === 1) return 1
    const beTrustMap: Record<number, Record<number, true>> = {}
    const trustMap: Record<number, Record<number, true>> = {}
    for (const p of trust) {
        if (!beTrustMap[p[1]]) {
            beTrustMap[p[1]] = {}
        }
        beTrustMap[p[1]][p[0]] = true
        if (!trustMap[p[0]]) {
            trustMap[p[0]] = {}
        }
        trustMap[p[0]][p[1]] = true
    }
    for (const p of trust) {
        if (Object.keys(beTrustMap[p[1]]).length === N - 1) {
            if (!trustMap[p[1]]) {
                return p[1]
            }
        }
    }
    return -1
};
