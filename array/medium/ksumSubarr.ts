function maxKSumSubArr(nums: number[], k: number): number {
    let n = nums.length
    let maxLen = 0
    let l=0
    let r=0
    let sum=0

    // maintain 2 pointers left and right
    // initailly we just add nums[r] to sum,
    // if sum==k we just calc maxLen but if sum>k 
    // then we start another while loop
    // which runs only if sum>k, it start substracting form left side i.e. nums[l] from sum
    while(r<n){
        sum+=nums[r]
        while(sum>k && l<r){
            sum-=nums[l]
            l++
        }
        if(sum==k){
            maxLen=Math.max(maxLen, r-l+1)
        }
        r++
    }
    return maxLen
}
console.log(maxKSumSubArr([2, 3, 5, 1, 9], 10))
console.log(maxKSumSubArr([1, 1, 2, 3], 3))

function subarraySum(arr: number[], k: number): number {
  let n = arr.length;
  let hsh = new Map();
  let sum = 0;
  let c = 0;
  hsh.set(0, 1);
  for (let i = 0; i < n; i++) {
    sum += arr[i];
    let rem = sum - k;
    if (hsh.has(rem)) {
      c += hsh.get(rem);
    }
    if (hsh.has(sum)) {
      hsh.set(sum, hsh.get(sum) + 1);
    } else {
      hsh.set(sum, 1);
    }
  }
  console.log(c);
  return c;
}
subarraySum([1, 2, 3], 3);

