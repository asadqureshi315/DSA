function setMatrixZeroes(arr: number[][]) {
  let l = arr.length;
  let r = new Array(l).fill(0);
  let c = new Array(arr[0].length).fill(0);
  for (let i = 0; i < l; i++) {
    let il = arr[i].length;
    for (let j = 0; j < il; j++) {
      if (arr[i][j] == 0) {
        r[i] = 1;
        c[j] = 1;
      }
    }
  }
  for (let i = 0; i < l; i++) {
    let il = arr[i].length;
    for (let j = 0; j < il; j++) {
      if (r[i] || c[j]) {
        arr[i][j] = 0;
      }
    }
  }
  console.log(arr);
}
setMatrixZeroes([
  [1, 1, 1],
  [1, 0, 1],
  [1, 1, 1],
]);
