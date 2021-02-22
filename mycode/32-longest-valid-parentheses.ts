function longestValidParentheses(s: string): number {
    if (!s) return 0
    // let d[i] to be the length of valid parentheses start at s[i]
    const d: number[] = []
    for (let i = s.length - 1; i >= 0; i--) {
        if (i === s.length - 1) {
            d[i] = 0
            continue
        }
        if (s[i] === ')') {
            d[i] = 0
        } else if (s[i + 1] === '(') {
            if (s[i + d[i + 1] + 1] === ')') {
                d[i] = d[i + 1] + 2 + (d[i + d[i + 1] + 2] ?? 0)
            } else {
                d[i] = 0
            }
        } else {
            d[i] = 2 + (d[i + 2] ?? 0)
        }
    }
    return Math.max(...d)
};

// Testcase
// "(()"
// "()(()()(()"
// ")()())"
// "()(())"
// "((()))())"
