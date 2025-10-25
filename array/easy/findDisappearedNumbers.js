// Given an array nums of n integers where nums[i] is in the range [1, n], return an array of all the integers in the range [1, n] that do not appear in nums.
// Example 1:
// Input: nums = [4,3,2,7,8,2,3,1]
// Output: [5,6]


function findDisappearedNumbers(nums: number[]): number[] {
    // let n = nums.length
    // let sorted = nums.sort((a, b) => a - b)
    // let set = new Set(sorted)
    // let map = new Map()
    // let removed=[]
    // for (let i = 1; i < n + 1; i++) {
    //     if(!set.has(i)) removed.push(i)
    // }
    // return removed
    let n=nums.length
    let set=new Set<number>()
    for(let i = 1;i<n+1;i++){
        set.add(i)
    }
    for(let i=0;i<n+1;i++){
        set.delete(nums[i])
    }
    return Array.from(set)
};
