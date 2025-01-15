function checkSorted(arr: Array<number>): boolean | null {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i - 1] > arr[i]) {
      return false;
    }
  }
  return true;
}
let ar = [1, 1, 1, 2, 2, 3, 4, 4, 4, 5, 6, 9, 12, 65, 90, 290];
let c = checkSorted(ar);
console.log(c);
