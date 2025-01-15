// function findSubArrSum(arr: Array<number>, k: number) {
//   let sum = arr[0];
//   let left = 0;
//   let right = 0;
//   let maxLength = 0;
//   while (right < arr.length) {
//     while (right >= left && sum > k) {
//       sum -= arr[left];
//       left++;
//     }
//     if (sum == k) {
//       maxLength = Math.max(maxLength, right - left + 1);
//     }
//     right++;
//     if (right < arr.length) sum += arr[right];
//   }
//   return maxLength;
// }
function findSubArrSum(arr: number[], k: number) {
  let len = arr.length;
  let hsh = new Map();
  let maxl = 0;
  let sum = 0;
  for (let i = 0; i < len; i++) {
    sum += arr[i];
    if (sum == k) {
      maxl = Math.max(maxl, i + 1);
    }
    let rem = sum - k;
    if (hsh.has(rem)) {
      let l = i - hsh.get(rem);
      maxl = Math.max(maxl, l);
    }
    if (!hsh.has(sum)) {
      hsh.set(sum, i);
    }
  }
  console.log(hsh);
  return maxl;
}

console.log(findSubArrSum([2, 0, 0, 3, 5], 5));
