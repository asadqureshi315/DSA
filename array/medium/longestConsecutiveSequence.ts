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

function longestConsecutive(nums: number[]): number {
  const numSet = new Set(nums);
  let maxLen = 0;

  for (let num of numSet) {
    // Only start counting if it's the beginning of a sequence
    if (!numSet.has(num - 1)) {
      let currentNum = num;
      let currentStreak = 1;

      while (numSet.has(currentNum + 1)) {
        currentNum += 1;
        currentStreak += 1;
      }

      maxLen = Math.max(maxLen, currentStreak);
    }
  }

  return maxLen;
}

longestConsecutiveSequence([100, 200, 1, 3, 2, 4]);
longestConsecutiveSequence([3, 8, 5, 7, 6]);
longestConsecutiveSequence([1, 0, 1, 2]);
