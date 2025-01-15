function reverseArr(arr: Array<number>, start: number, end: number) {
  if (start <= end) {
    let a = arr[end];
    arr[end] = arr[start];
    arr[start] = a;
    reverseArr(arr, start + 1, end - 1);
  }
}
let a = [1, 2, 3, 4, 5];
reverseArr(a, 0, a.length - 1);
console.log(a);
