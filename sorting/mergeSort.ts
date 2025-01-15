function mergeSort(arr: Array<number>, low: number, high: number) {
  if (low >= high) return;
  let mid = Math.floor((low + high) / 2);
  mergeSort(arr, low, mid);
  mergeSort(arr, mid + 1, high);
  merge(arr, low, mid, high);
}
function merge(arr: Array<number>, low: number, mid: number, high: number) {
  let left = low;
  let right = mid + 1;
  let temp: Array<number> = [];
  while (left <= mid && right <= high) {
    if (arr[left] <= arr[right]) {
      temp.push(arr[left]);
      left++;
    } else {
      temp.push(arr[right]);
      right++;
    }
  }
  while (left <= mid) {
    temp.push(arr[left]);
    left++;
  }
  while (right <= high) {
    temp.push(arr[right]);
    right++;
  }
  for (let i = low; i <= high; i++) {
    arr[i] = temp[i - low];
  }
}

let ar = [4, 3, 2, 1, 90, 12, 65, 1, 5, 2, 9, 4, 290, 1, 4, 6];
mergeSort(ar, 0, ar.length - 1);
console.log(ar);
