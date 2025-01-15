function majorityElement(arr: Array<number>, n: number) {
  let t = Math.floor(n / 2);
  let freq = new Map();
  for (let i = 0; i < n; i++) {
    let ele = freq.get(arr[i]);
    if (freq.has(arr[i])) {
      freq.set(arr[i], ele + 1);
    } else {
      freq.set(arr[i], 1);
    }
  }
  console.log(freq);
  for (let k of freq) {
    if (k[1] > t) {
      return k[0];
    }
  }
}
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2], 7));
