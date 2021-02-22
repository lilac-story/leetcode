function validateStackSequences(pushed: number[], popped: number[]): boolean {
    const stack: number[] = []
    while (popped.length) {
        if (stack.length && stack[stack.length - 1] === popped[0]) {
            stack.pop()
            popped.shift()
        } else {
            if (pushed.length === 0) return false
            stack.push(pushed[0])
            pushed.shift()
        }
    }
    return true
};