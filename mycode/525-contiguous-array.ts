function findMaxLength(nums: number[]): number {
    let c0 = 0
    let c1 = 0
    let max = 0
    const map: { [key: number]: number } = {}
    for (let i = 0; i <= nums.length; i++) {
        if (map[c0 - c1] === undefined) {
            map[c0 - c1] = i
        } else {
            max = Math.max(max, i - map[c0 - c1])
        }
        if (nums[i] === 0) c0++
        if (nums[i] === 1) c1++
    }
    return max
};
