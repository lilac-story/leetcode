function myAtoi(s: string): number {
    let i = 0n
    let factor = 1n
    let state = 0
    for (const c of s) {
        if (state === 0) {
            if (c === ' ') continue
            else state = 1
        }
        if (state === 1) {
            if (c === '-' || c === '+') {
                if (c === '-') {
                    factor = -factor
                }
                state = 2
                continue
            }
            state = 2
        }
        if (state === 2) {
            if (c.match(/[0-9]/)) {
                i = i * 10n
                i += factor * BigInt(c)
            } else {
                break
            }
        }
    }
    if (i > 2n ** 31n - 1n) {
        i = 2n ** 31n - 1n
    }
    if (i < -(2n ** 31n)) {
        i = -(2n ** 31n)
    }
    return Number(i)
};