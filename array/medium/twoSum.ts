function twoSum(arr: Array<number>, k: number) {
  let l = arr.length;
  let m = new Map();
  for (let i = 0; i < arr.length; i++) {
    let diff = k - arr[i];
    if (m.has(diff)) {
      return [m.get(diff), i];
    }
    m.set(arr[i], i);
  }
}

function twoSum2Pointer(arr: Array<number>, k: number) {
  let l = arr.length;
  let left = 0;
  let right = l - 1;
  let sum = arr[left] + arr[right];
  while (left <= right) {
    sum = arr[left] + arr[right];
    if (sum > k) {
      right--;
    } else if (sum < k) {
      left++;
    } else {
      return [left, right];
    }
  }
  return [-1, -1];
}

console.log(twoSum([1, 2, 5, 6, 12], 8));
console.log(twoSum2Pointer([1, 2, 5, 6, 12], 8));
