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

/**
 Optimal Solution
 */
//  function moveZeroes(arr: number[]): void {
//   let p = -1
//   for (let i = 0; i < arr.length; i++) {
//       if (arr[i] == 0) {
//           p = i
//           break
//       }
//   }
//   if(p==-1) return
//   for (let i = p + 1; i < arr.length; i++) {
//       if (arr[i] != 0) {
//           [arr[i], arr[p]] = [arr[p], arr[i]]
//           p++
//       }
//   }
// };
