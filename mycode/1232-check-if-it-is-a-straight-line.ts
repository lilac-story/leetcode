function checkStraightLine(coordinates: number[][]): boolean {
    let slope: number | null = null
    for (let i = 1; i < coordinates.length; i++) {
        const [x1, y1] = coordinates[i]
        const [x0, y0] = coordinates[i-1]
        if (slope === null) {
            slope = (y1 - y0) / (x1 - x0)
        } else {
            const s = (y1 - y0) / (x1 - x0)
            if (Math.abs(slope) === Infinity && Math.abs(s) === Infinity) {
                continue
            }
            if (Math.abs(s - slope) >= Number.EPSILON) return false
        }
    }
    return true
};
