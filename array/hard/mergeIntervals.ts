// we will compare our new array to the nums
// compare element of res to nums
// use max to get max of result's currentIndex and nums[i]
// else push nums's next element to res and increment c i.e. we merged all mergable intervals and need to 
// compare with next elements

function merge(nums: number[][]) {
    let n = nums.length
    nums.sort((a, b) => a[0] - b[0]);
    let res = [nums[0]]
    let c = 0
    for (let i = 0; i < n - 1; i++) {
        if (res[c][1] >= nums[i + 1][0]) {
            res[c] = [res[c][0], Math.max(res[c][1], nums[i + 1][1])]
        } else {
            res.push(nums[i + 1])
            c++
        }
    }
    return res
}
console.log(mergeOverlapping([[1, 3], [2, 6], [5, 10], [15, 18]]))
console.log(mergeOverlapping([[4,7],[1,4]]))

function mergeIntervals(arr: number[][]) {
  let l = arr.length;
  let ans = [arr[0]];
  for (let i = 0; i < arr.length; i++) {
    let cur = arr[i];
    let last = ans[ans.length - 1];
    if (cur[0] <= last[1]) {
      last[1] = Math.max(last[1], cur[1]);
    } else {
      ans.push(cur);
    }
  }
  console.log(ans);
}
mergeIntervals([
  [1, 3],
  [2, 6],
  [6, 10],
  [12, 15],
]);

