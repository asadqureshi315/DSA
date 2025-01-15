function mergeSortedArr(a1: number[], a2: number[]) {
  let l = 0;
  let r = 0;
  let a3: number[] = [];
  while (l < a1.length && r < a2.length) {
    if (a1[l] >= a2[r]) {
      a3.push(a2[r]);
      r++;
    } else {
      a3.push(a1[l]);
      l++;
    }
  }
  if (r < a2.length) {
    while (r < a2.length) {
      a3.push(a2[r]);
      r++;
    }
  }
  if (l < a1.length) {
    while (l < a1.length) {
      a3.push(a2[l]);
      l++;
    }
  }
  console.log(a3);
}
function mergeSortedArr_2Pointer(a1: number[], a2: number[]) {
  let l = a1.length - 1;
  let r = 0;
  while (l > 0 && r < a2.length) {
    if (a1[l] >= a2[r]) {
      [a1[l], a2[r]] = [a2[r], a1[l]];
      r++;
      l--;
    } else {
      break;
    }
  }
  a1.sort((a, b) => a - b);
  a2.sort((a, b) => a - b);
  console.log(a1, a2);
}

mergeSortedArr_2Pointer([0, 2, 5, 6], [1, 3, 4, 7]);
// mergeSortedArr([0, 2, 5, 6], [1, 3, 4, 7]);
