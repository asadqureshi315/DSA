// function findRepeatingAndMissing(arr: number[]) {
//   arr.sort((a, b) => a - b);
//   let map = new Map();
//   for (let i = 1; i < arr.length + 1; i++) {
//     map.set(i, 0);
//   }
//   arr.forEach((itm) => {
//     map.set(itm, map.get(itm) + 1);
//   });
//   console.log(map);
//   for (let [k, v] of map.entries()) {
//     if (map.get(k) == 2) {
//       console.log("repeating no. is : ", k);
//     } else if (map.get(k) == 0) {
//       console.log("missing no. is: ", k);
//     }
//   }
// }
// findRepeatingAndMissing([1, 2, 3, 5, 3]);

function findMissingRepeatingNumbers(a: number[]) {
  const n = a.length;
  const hash = new Array(n + 1).fill(0);

  for (let i = 0; i < n; i++) {
    console.log(a[i]);
    hash[a[i]]++;
  }
  console.log(hash);

  let repeating = -1,
    missing = -1;
  for (let i = 1; i <= n; i++) {
    if (hash[i] == 2) repeating = i;
    else if (hash[i] == 0) missing = i;

    if (repeating != -1 && missing != -1) break;
  }

  return [repeating, missing];
}

const a = [3, 1, 2, 5, 4, 6, 7, 5];
const ans = findMissingRepeatingNumbers(a);
console.log(`The repeating and missing numbers are: [${ans[0]}, ${ans[1]}]`);
