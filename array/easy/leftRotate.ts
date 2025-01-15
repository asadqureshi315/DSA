function leftRotate(arr: Array<number>, n: number): Array<number> | null {
  let l = arr.length;
  let new_ar: Array<number> = Array(l);
  // First loop: Copy elements from n to end of the original array
  for (let i = 0; i < l - n; i++) {
    new_ar[i] = arr[i + n];
  }
  // Second loop: Copy elements from start to n-1 of the original array
  for (let i = 0; i < n; i++) {
    new_ar[l - n + i] = arr[i];
  }
  return new_ar;
}
let ar = [1, 2, 3, 4, 5];
let c = leftRotate(ar, 2);
console.log(c);
