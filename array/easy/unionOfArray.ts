function Union(a: Array<number>, m: number, b: Array<number>, n: number) {
  let ans: Array<number> = [];
  let i = 0;
  let j = 0;

  while (i < m && j < n) {
    if (a[i] < b[j]) {
      if (!ans.includes(a[i])) {
        ans.push(a[i]);
      }
      i++;
    } else if (a[i] > b[j]) {
      if (!ans.includes(b[j])) {
        ans.push(b[j]);
      }
      j++;
    } else {
      if (!ans.includes(a[i])) {
        ans.push(a[i]);
      }
      i++;
      j++;
    }
  }

  while (i < m) {
    if (!ans.includes(a[i])) {
      ans.push(a[i]);
    }
    i++;
  }

  while (j < n) {
    if (!ans.includes(b[j])) {
      ans.push(b[j]);
    }
    j++;
  }

  return ans;
}

let ar = [1, 2, 3, 4, 5];
let ar2 = [2, 2, 3, 3, 4, 5, 6];
console.log(Union(ar, ar.length, ar2, ar2.length));
