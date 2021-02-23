function productExceptSelf(nums: number[]): number[] {
    const output: number[] = []
    let product = 1
    for (const i of nums) {
        output.push(product)
        product *= i
    }
    let temp = 1
    for (let i = nums.length - 1; i >= 0; i--) {
        const temp1 = temp * (nums[i + 1] ?? 1)
        temp = nums[i]
        nums[i] = temp1
    }
    for (let i = 0; i < output.length; i++) {
        output[i] = output[i] * nums[i]
    }
    return output
};
