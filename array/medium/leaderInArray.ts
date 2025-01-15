function leaderInArr_BruteForce(arr: Array<number>) {
  let l = arr.length;
  let res: Array<number> = [];
  for (let i = 0; i < l; i++) {
    let t = true;
    for (let j = i + 1; j < l; j++) {
      if (arr[i] < arr[j]) {
        t = false;
      }
    }
    if (t) {
      res.push(arr[i]);
    }
  }
  console.log(res);
}

function leaderInArr(arr: Array<number>) {
  let l = arr.length;
  let ans: Array<number> = [];
  let max = -Infinity;
  for (let i = l - 1; i >= 0; i--) {
    if (arr[i] > max) {
      ans.push(arr[i]);
      max = arr[i];
    }
  }
  console.log(ans);
}

leaderInArr([4, 7, 1, 0]);
leaderInArr([10, 22, 12, 3, 0, 6]);
