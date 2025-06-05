function threeSum(arr: number[]) {
  arr.sort((a, b) => a - b);
  let n = arr.length;
  let ans: number[][] = [];
  for (let i = 0; i < n; i++) {
    if (i > 0 && arr[i] === arr[i - 1]) {
      continue;
    }
    let l = i + 1;
    let r = n - 1;
    while (l < r) {
      let sum = arr[i] + arr[l] + arr[r];
      if (sum == 0) {
        ans.push([arr[i], arr[l], arr[r]]);
        l++;
        r--;
        while (l < r && arr[l] == arr[l - 1]) {
          l++;
        }
        while (l < r && arr[r] == arr[r - 1]) {
          r--;
        }
      } else if (sum > 0) {
        r--;
      } else if (sum < 0) {
        l++;
      }
    }
  }
  console.log(ans);
}
threeSum([-1, 0, 1, 2, -1, -4]);
