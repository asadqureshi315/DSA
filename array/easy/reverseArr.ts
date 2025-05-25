function reverseArr(arr: number[]) {
  let ra: number[] = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    ra.push(arr[i]);
  }
  return ra;
}
function reverseArr2Pointer(arr: number[]) {
  let i = 0;
  let j = arr.length - 1;
  while (i < j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
    i++;
    j--;
  }
  return arr;
}
console.log(reverseArr2Pointer([1, 2, 3, 4, 5]));
