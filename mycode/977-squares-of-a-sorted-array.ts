function sortedSquares(nums: number[]): number[] {
    let cursor = nums.findIndex(s => s >= 0)
    let cursor_m = cursor - 1
    if (cursor === -1) {
        cursor = nums.length
        cursor_m = nums.length - 1
    }
    const result: number[] = []
    while (cursor < nums.length || cursor_m >= 0) {
        if (cursor >= nums.length) {
            result.push(nums[cursor_m] ** 2)
            cursor_m--
            continue
        } else if (cursor_m < 0) {
            result.push(nums[cursor] ** 2)
            cursor++
            continue
        } else {
            if (Math.abs(nums[cursor_m]) < Math.abs(nums[cursor])) {
                result.push(nums[cursor_m] ** 2)
                cursor_m--
                continue
            } else {
                result.push(nums[cursor] ** 2)
                cursor++
                continue
            }
        }
    }
    return result
};
