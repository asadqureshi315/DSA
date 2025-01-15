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
