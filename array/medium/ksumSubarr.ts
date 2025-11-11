// map stores cumulative sums as keys and their frequency as values. It's initialized with [0, 1] to handle subarrays starting from index 0.
// Loop through the array:

// Add current element to sum (running cumulative sum)
// Calculate diff = sum - k (the cumulative sum we need to have seen before)
// If diff exists in the map, it means we've found subarray(s) that sum to k. Add the frequency of diff to our count
// Store/update the current sum in the map



// Example: nums = [1, 2, 3], k = 3

// i=0: sum=1, diff=-2, map={0:1, 1:1}, count=0
// i=1: sum=3, diff=0, found! count=1, map={0:1, 1:1, 3:1}
// i=2: sum=6, diff=3, found! count=2, map={0:1, 1:1, 3:1, 6:1}

// Result: 2 subarrays [1,2] and [3]

function subarraySum(nums: number[], k: number): number {
    let n = nums.length
    let sum = 0
    let map = new Map<number, number>([[0, 1]])
    let count = 0
    for (let i = 0; i <n; i++) {
        sum += nums[i]
        let diff = sum-k
        if (map.has(diff)) {
            count += map.get(diff)
        }
        map.set(sum, (map.get(sum) || 0) + 1)
    }
    return count
};

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


