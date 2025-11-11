// Optimal
// we will maintain prefix product and suffix product, 
// when ever we encounter 0 we will reset prefix or suffix to 0 i.e we will need to start re calc after 0 since n*0=0
// will set maxProduct to max of prefix, suffix and maxPrd
function maxProductSubArr(nums:number[]){
    let n=nums.length
    let prefix=1
    let suffix=1
    let maxPrd=-Infinity
    for(let i=0;i<n;i++){
        if(prefix==0) prefix=1
        if(suffix==0) suffix=1
        prefix*=nums[i]
        suffix*=nums[n-i-1]
        maxPrd=Math.max(maxPrd, prefix,suffix)
    }
    return maxPrd
}
console.log(maxProductSubArr([1,3,-3,2,0,4,-4,8,2,9]))

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

