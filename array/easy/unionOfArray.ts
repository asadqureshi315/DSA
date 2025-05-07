function Union(a: Array<number>, m: number, b: Array<number>, n: number) {
  let ans: Array<number> = [];
  let i = 0;
  let j = 0;

  while (i < m && j < n) {
    if (a[i] < b[j]) {
      if (!ans.includes(a[i])) {
        ans.push(a[i]);
      }
      i++;
    } else if (a[i] > b[j]) {
      if (!ans.includes(b[j])) {
        ans.push(b[j]);
      }
      j++;
    } else {
      if (!ans.includes(a[i])) {
        ans.push(a[i]);
      }
      i++;
      j++;
    }
  }

  while (i < m) {
    if (!ans.includes(a[i])) {
      ans.push(a[i]);
    }
    i++;
  }

  while (j < n) {
    if (!ans.includes(b[j])) {
      ans.push(b[j]);
    }
    j++;
  }

  return ans;
}

let ar = [1, 2, 3, 4, 5];
let ar2 = [2, 2, 3, 3, 4, 5, 6];
console.log(Union(ar, ar.length, ar2, ar2.length));


/**
 Do not return anything, modify nums1 in-place instead.
 */
 function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  let i = m - 1; // Pointer for nums1's last valid element
 let j = n - 1; // Pointer for nums2's last element
 let k = m + n - 1; // Pointer for nums1's last position

 while (i >= 0 && j >= 0) {
     if (nums1[i] > nums2[j]) {
         nums1[k] = nums1[i];
         i--;
     } else {
         nums1[k] = nums2[j];
         j--;
     }
     k--;
 }

 // If there are remaining elements in nums2, copy them
 while (j >= 0) {
     nums1[k] = nums2[j];
     j--;
     k--;
 }
};