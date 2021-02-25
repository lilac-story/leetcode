function singleNonDuplicate(nums: number[]): number {
    let lo = 0, hi = nums.length
    let mi
    while (lo + 2 < hi) {
        mi = Math.floor((lo + hi) / 2)
        if (mi % 2 !== 0) mi++
        if (nums[mi-1] !== nums[mi] && nums[mi] !== nums[mi+1]) {
            return nums[mi]
        } else if (nums[mi-1] === nums[mi]) {
            hi = mi
        } else {
            lo = mi
        }
    }
    for (let i = lo; i <= lo + 2; i++) {
        if (nums[i-1] !== nums[i] && nums[i] !== nums[i+1]) {
            return nums[i]
        }
    }
    return nums[lo]
};
