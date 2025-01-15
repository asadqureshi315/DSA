function removeDuplicate(arr: Array<number>) {
  let pos = 0;
  let pos2 = 0;
  while (pos < arr.length) {
    if (arr.lastIndexOf(arr[pos]) !== pos) {
      pos = arr.lastIndexOf(arr[pos]) + 1;
      console.log(pos, pos2);
    } else {
      arr[pos2] = arr[pos];
    }
    pos++;
    pos2++;
  }
  while (pos2 < arr.length) {
    arr[pos2] = 0;
    pos2++;
  }
}
let ar = [1, 1, 1, 2, 2, 3];
removeDuplicate(ar);
console.log(ar);
