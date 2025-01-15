function secondLargest(arr: Array<number>): number {
  let largest = -Infinity;
  let secLargest = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      secLargest = largest;
      largest = arr[i];
    } else if (arr[i] > secLargest && arr[i] !== largest) {
      secLargest = arr[i];
    }
  }
  return secLargest;
}
let ar = [31, 32, 9, 43, 78, 43, 89, 80, 12, 57];
let c = secondLargest(ar);
console.log(c);
