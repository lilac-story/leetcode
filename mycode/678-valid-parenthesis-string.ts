function checkValidString(s: string): boolean {
    // let d[i][j] to be true if substring [i, j] is valid
    // d[i][j] depends on d[i+1][j] or (d[i][k+1] and d[k][j])
    // i--, j++
    const d: boolean[][] = []
    for (let i = s.length - 1; i >= 0; i--) {
        d[i] = []
        for (let j = 0; j <= s.length; j++) {
            if (j < i + 1 || s[i] === ')') {
                d[i][j] = false
                continue
            }
            if (s[i] === '*') {
                if (j === i + 1) d[i][j] = true
                else d[i][j] = d[i+1][j]
                if (d[i][j]) continue
            }
            let valid = false
            for (let k = i + 1; k < j; k++) {
                if (k < j - 1 && (s[k] === ')' || s[k] === '*') && d[i][k+1] && d[k+1][j]) {
                    valid = true
                    break
                } else if (k === j - 1 && (s[k] === ')' || s[k] === '*')) {
                    if (k === i + 1) valid = true
                    else valid = d[i+1][j-1]
                }
            }
            d[i][j] = valid
        }
    }
    return d[0][s.length]
};
