function subarraySum(nums: number[], k: number): number {
    let map: { [key: number]: number } = {}
    let sum = 0
    let cnt = 0
    for (let i = 0; i < nums.length; i++) {
        if (!map[sum]) map[sum] = 0
        map[sum]++
        sum += nums[i]
        cnt += map[sum - k] ?? 0
    }
    return cnt
};
