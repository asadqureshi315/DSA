function fourSum(arr: number[], target: number): number[][] {
  arr.sort((a, b) => a - b);
  let n = arr.length;
  let ans: number[][] = [];
  for (let i = 0; i < n; i++) {
    if (i > 0 && arr[i] == arr[i - 1]) continue;
    for (let j = i + 1; j < n; j++) {
      let k = j + 1;
      let l = n - 1;
      while (k < l) {
        let sum = arr[i] + arr[j] + arr[k] + arr[l];
        if (sum == target) {
          ans.push([arr[i], arr[j], arr[k], arr[l]]);
          k++;
          l--;
          while (arr[k] == arr[k + 1] && k < l) {
            k++;
          }
          while (arr[l] == arr[l - 1] && l > k) {
            l--;
          }
        } else if (sum > target) {
          l--;
        } else {
          k++;
        }
      }
    }
  }
  return ans;
}
console.log(fourSum([1, 0, -1, 0, -2, 2], 0));
