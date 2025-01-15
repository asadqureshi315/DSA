function countOccurrence(arr: number[], x: number): number {
  function findLeftmostIndex(): number {
    let left = 0,
      right = arr.length - 1;
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (arr[mid] < x) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    return left;
  }

  function findRightmostIndex(): number {
    let left = 0,
      right = arr.length - 1;
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (arr[mid] <= x) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    return right;
  }

  const leftIndex = findLeftmostIndex();
  const rightIndex = findRightmostIndex();

  if (
    leftIndex <= rightIndex &&
    arr[leftIndex] === x &&
    arr[rightIndex] === x
  ) {
    return rightIndex - leftIndex + 1;
  }

  return 0;
}

console.log(countOccurrence([2, 2, 3, 3, 3, 3, 4], 3)); // Output: 4
