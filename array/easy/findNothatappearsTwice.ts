function findNothatappearsTwice(arr: Array<number>) {
  // let s: { [key: number]: number } = {};
  // let s: object = {};

  //better to use record provided by ts
  let s: Record<number, number> = {};
  for (let i = 0; i < arr.length; i++) {
    if (s[arr[i]]) {
      s[arr[i]]++; //if used object then had to do type assertion like this (s as any)[arr[i]]++;
    } else {
      s[arr[i]] = 1;
    }
  }
  for (let key in s) {
    if (s[key] == 1) {
      return key;
    }
  }
}
console.log(findNothatappearsTwice([4, 1, 2, 1, 2]));
console.log(findNothatappearsTwice([2, 2, 1]));
