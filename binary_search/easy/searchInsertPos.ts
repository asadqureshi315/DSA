function searchiInsertPosition(arr: number[], x: number) {
  let l = 0;
  let h = arr.length - 1;
  let ans = arr.length;
  while (l <= h) {
    let mid = Math.floor((l + h) / 2);
    if (arr[mid] == x) {
      ans = mid;
      h--;
      l++;
    } else if (arr[mid] < x) {
      ans = mid;
      l = mid + 1;
    } else {
      ans = mid;
      h = mid - 1;
    }
  }
  console.log(ans);
  return ans;
}
searchiInsertPosition([1, 2, 4, 7], 6);
searchiInsertPosition([1, 2, 4, 7], 2);
