function first_last_pos(arr: number[], x: number) {
  let [fo, lo] = [searchFirst(arr, x), searchLast(arr, x)];
  if (fo <= lo && arr[fo] === x && arr[lo] === x) {
    return [fo, lo];
  }
  return [-1, -1];
}
function searchFirst(arr: number[], x: number) {
  let l = 0;
  let h = arr.length - 1;
  while (l <= h) {
    let mid = Math.floor((l + h) / 2);
    if (arr[mid] < x) {
      l = mid + 1;
    } else {
      h = mid - 1;
    }
  }
  return l;
}
function searchLast(arr: number[], x: number) {
  let l = 0;
  let h = arr.length - 1;
  while (l <= h) {
    let mid = Math.floor((l + h) / 2);
    if (arr[mid] <= x) {
      l = mid + 1;
    } else {
      h = mid - 1;
    }
  }
  return h;
}
console.log(first_last_pos([5, 7, 7, 8, 8, 10], 8));
