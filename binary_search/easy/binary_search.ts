function binary_search(arr: number[], t: number) {
  let l = 0;
  let h = arr.length - 1;
  while (l <= h) {
    let mid = Math.floor((l + h) / 2);
    if (arr[mid] == t) {
      return mid;
    } else if (arr[mid] < t) {
      l = mid + 1;
    } else {
      h = mid - 1;
    }
  }
  return -1;
}
console.log(binary_search([1, 2, 3, 4, 5, 6, 7, 8, 9], 7));
