function longestConsecutiveSequence(arr: Array<number>) {
  let l = arr.length;
  arr.sort((a, b) => a - b);
  let longest = 1;
  let c = 0;
  let lastSmallest = -Infinity;
  for (let i = 0; i < l; i++) {
    if (arr[i] - 1 === lastSmallest) {
      c++;
      lastSmallest = arr[i];
    } else if (arr[i] !== lastSmallest) {
      c = 1;
      lastSmallest = arr[i];
    }
    longest = Math.max(longest, c);
  }
  console.log(longest);
}

longestConsecutiveSequence([100, 200, 1, 3, 2, 4]);
longestConsecutiveSequence([3, 8, 5, 7, 6]);
longestConsecutiveSequence([1, 0, 1, 2]);
