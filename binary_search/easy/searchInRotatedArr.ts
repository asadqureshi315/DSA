function searchInRotatedArr(arr: number[], x: number) {
  let l = 0;
  let h = arr.length - 1;
  while (l <= h) {
    let mid = Math.floor((l + h) / 2);
    if (arr[mid] == x) return mid;
    else if (arr[l] < arr[mid]) {
      if (arr[l] < x && x < arr[mid]) {
        h = mid - 1;
      } else {
        l = mid + 1;
      }
    } else {
      if (arr[mid] < x && x < arr[h]) {
        l = mid + 1;
      } else {
        h = mid - 1;
      }
    }
  }
  return -1;
}
console.log(searchInRotatedArr([4, 5, 6, 7, 0, 1, 2, 3], 1));
