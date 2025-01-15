function rotate90Deg_BruteForce(arr: number[][]) {
  let m = arr.length;
  let n = arr[0].length;
  let res = new Array(n).fill(0).map(() => new Array(m).fill(0));
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      res[j][m - i - 1] = arr[i][j];
    }
  }
  console.log(res);
}

function rotate90Deg(arr: number[][]) {
  let m = arr.length;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < i; j++) {
      [arr[i][j], arr[j][i]] = [arr[j][i], arr[i][j]];
    }
  }
  for (let i = 0; i < m; i++) {
    arr[i].reverse();
  }
  console.log(arr);
}
rotate90Deg([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]);
