function maxProduct(nums: number[]): number {
    let n = nums.length
    let maxPrd = nums[0]
    for (let i = 0; i < n; i++) {
        let prd = 1
        for (let j = i; j < n; j++) {
            prd *= nums[j]
            maxPrd = Math.max(prd, maxPrd)
        }
    }
    return maxPrd
};
