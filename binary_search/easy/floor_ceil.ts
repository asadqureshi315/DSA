function floor_ceil(arr: number[], x: number) {
  let n = arr.length;
  let l = 0;
  let h = n - 1;
  let floor = 0;
  let ceil = n - 1;
  while (l <= h) {
    let mid = Math.floor((l + h) / 2);
    if (arr[mid] > x) {
      ceil = arr[mid];
      h = mid - 1;
    } else {
      floor = arr[mid];
      l = mid + 1;
    }
  }
  console.log(ceil, floor);
}
floor_ceil([3, 4, 4, 7, 8, 10], 5);
