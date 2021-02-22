function largestTimeFromDigits(arr: number[]): string {
    const A = (arr: number[]): number[][] => {
        if (arr.length === 1) return [arr]
        return arr.map((v, i) => {
            const c = [...arr]
            c.splice(i, 1)
            return A(c).map((v1) => [v, ...v1]) 
        }).flat()
    }
    const r = A(arr).filter((arr) => (
        arr[0] <= 2 &&
        arr[0] * 10 + arr[1] <= 23 &&
        arr[2] <= 5
    )).sort((a, b) => (
        b[0] * 1000 + b[1] * 100 + b[2] * 10 + b[3] -
        a[0] * 1000 - a[1] * 100 - a[2] * 10 - a[3]
    ))[0]
    if (!r) return ''
    return `${r[0]}${r[1]}:${r[2]}${r[3]}`
};
