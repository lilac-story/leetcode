function scoreOfParentheses(S: string): number {
    const stack: number[] = []
    for (const c of S) {
        if (c === '(') {
            stack.push(0)
        } else {
            let sum = 0
            let p = stack.pop() as number
            while (p !== 0) {
                sum += p
                p = stack.pop() as number
            }
            stack.push(sum === 0 ? 1 : 2 * sum)
        }
    }
    return stack.reduce((acc, c) => (acc + c))
};
