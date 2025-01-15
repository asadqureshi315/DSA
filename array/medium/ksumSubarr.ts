function subarraySum(arr: number[], k: number): number {
  let n = arr.length;
  let hsh = new Map();
  let sum = 0;
  let c = 0;
  hsh.set(0, 1);
  for (let i = 0; i < n; i++) {
    sum += arr[i];
    let rem = sum - k;
    if (hsh.has(rem)) {
      c += hsh.get(rem);
    }
    if (hsh.has(sum)) {
      hsh.set(sum, hsh.get(sum) + 1);
    } else {
      hsh.set(sum, 1);
    }
  }
  console.log(c);
  return c;
}
subarraySum([1, 2, 3], 3);
