function canJump(nums: number[]): boolean {
    const reachableRange: [number, number][] = []
    const newRange = (index: number, length: number) => {
        const range: [number, number] = [index, index + length]
        for (let i = 0; i < reachableRange.length; i++) {
            if (reachableRange[i][0] >= range[0] && reachableRange[i][0] <= range[1]) {
                range[1] = Math.max(range[1], reachableRange[i][1])
                reachableRange.splice(i, 1)
                i--
            } else if (reachableRange[i][0] <= range[0] && reachableRange[i][1] >= range[0]) {
                range[0] = reachableRange[i][0]
                range[1] = Math.max(range[1], reachableRange[i][1])
                reachableRange.splice(i, 1)
                i--
            } else if (reachableRange[i][0] > range[0]) {
                reachableRange.splice(i, 0, range)
                return
            }
        }
        reachableRange.push(range)
    }
    const isReachable = (num: number): boolean => {
        for (const range of reachableRange) {
            if (num >= range[0] && num <= range[1]) {
                return true
            }
        }
        return false
    }
    for (let i = 0; i < nums.length; i++) {
        if (i === 0 || isReachable(i)) {
            newRange(i, nums[i])
        }
        if (isReachable(nums.length - 1)) return true
    }
    return false
};
