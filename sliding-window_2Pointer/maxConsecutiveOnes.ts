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
console.log(bruteForceMaxConsecutiveOnes([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0],3))
