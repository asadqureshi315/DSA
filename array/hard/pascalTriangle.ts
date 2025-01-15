function pascalTriangle(n: number) {
  let arr: number[][] = [];
  for (let i = 1; i <= n; i++) {
    let temp_arr = new Array(i).fill(1);
    arr.push(temp_arr);
  }
  for (let i = 1; i < n; i++) {
    for (let j = 1; j < i; j++) {
      arr[i][j] = arr[i - 1][j] + arr[i - 1][j - 1];
    }
  }
  console.log(arr);
}
pascalTriangle(5);
