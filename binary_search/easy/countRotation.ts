function countRotation(arr: number[]) {
  let l = 0;
  let h = arr.length - 1;
  let count = 0;
  while (l <= h) {
    let mid = Math.floor((l + h) / 2);
    if (arr[l] < arr[mid] && arr[mid] < arr[h]) {
      count++;
      l = mid + 1;
    } else if (arr[l] < arr[mid]) {
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
  return count;
}
console.log(countRotation([4, 5, 6, 7, 0, 1, 2, 3]));
