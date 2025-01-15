function moveZeroes(arr: Array<number>) {
  let l = arr.length;
  for (let i = 0; i < l - 1; i++) {
    for (let j = 0; j < l - 1; j++) {
      if (arr[j] == 0) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
}

let c = [1, 0, 2, 0, 3, 0, 4, 0];
moveZeroes(c);
console.log(c);
