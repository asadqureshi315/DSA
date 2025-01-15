function lowerBound(arr: number[], x: number) {
  let l = 0;
  let h = arr.length - 1;
  let ans = arr.length;
  while (l <= h) {
    let mid = Math.floor((l + h) / 2);
    if (arr[mid] >= x) {
      ans = mid;
      h = mid - 1;
    } else if (arr[mid] < x) {
      l = mid + 1;
    }
  }
  return ans;
}
console.log(lowerBound([1, 2, 8, 10, 11, 12, 19], 0));
