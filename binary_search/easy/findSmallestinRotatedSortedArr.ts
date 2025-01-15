function findMin(arr: number[]): number {
  let l = 0;
  let h = arr.length - 1;
  let min = Infinity;
  while (l <= h) {
    let mid = Math.floor((l + h) / 2);
    min = Math.min(min, arr[mid]);
    if (arr[l] < arr[mid]) {
      if (arr[l] < arr[mid]) {
        h = mid - 1;
      } else {
        l = mid + 1;
      }
    } else {
      if (arr[mid] < arr[h]) {
        l = mid + 1;
      } else {
        h = mid - 1;
      }
    }
  }
  return -1;
}
