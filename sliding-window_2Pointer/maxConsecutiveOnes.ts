function bruteForceMaxConsecutiveOnes(nums: number[],k:number) {
    let n = nums.length
    let maxOnes=0
    for (let i = 0; i < n; i++) {
        let zeroCount=0
        for (let j = i; j < n; j++) {
            if(nums[j]==0){
                zeroCount++
            }
            if(zeroCount>k){
                break
            }
            maxOnes=Math.max(maxOnes, j-i+1)
        }
    }
    return maxOnes
}

function longestOnes(nums: number[], k: number): number {
    let n = nums.length
    let maxOnes = 0
    let l = 0
    let zeroCount=0
    for (let r = 0; r < n; r++) {
        if(nums[r]==0){
            zeroCount++
        }
        while(zeroCount>k){
            if(nums[l]==0){
                zeroCount--
            }
            l++
        }
        maxOnes=Math.max(maxOnes, r-l+1)
    }
    return maxOnes
};

console.log(bruteForceMaxConsecutiveOnes([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0],3))
console.log(longestOnes([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0],3))
