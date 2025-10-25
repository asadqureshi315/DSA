Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation.

Example 1:

Input: nums = [1,2,3,4]
Output: [24,12,8,6]

function productExceptSelf(nums: number[]): number[] {
    let n = nums.length
    let prefix = 1
    let res = Array(n).fill(1)
    for (let i = 0; i < n; i++) {
        res[i] = prefix
        prefix *= nums[i]
    }
    let suffix = 1
    for (let i = n - 1; i >= 0; i--) {
        res[i] *= suffix
        suffix *= nums[i]
    }
    return res
};
