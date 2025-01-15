function longestZerosumSubarr(arr: number[]) {
  let n = arr.length;
  let maxl = 0;
  let sum = 0;
  let map = new Map();
  for (let i = 0; i < n; i++) {
    sum += arr[i];
    if (sum == 0) {
      maxl = Math.max(maxl, i + 1);
    }
    let rem = sum - 0;
    if (map.has(rem)) {
      let l = i - map.get(rem);
      maxl = Math.max(maxl, l);
    }
    if (!map.has(sum)) {
      map.set(sum, i);
    }
  }
  console.log(maxl);
}
longestZerosumSubarr([9, -3, 3, -1, 6, -5]);
longestZerosumSubarr([6, -2, 2, -8, 1, 7, 4, -10]);
