function maxConsecutiveOnes(arr: Array<number>): Array<number> | null {
  let c = 0;
  let freqArr: Array<number> = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 1) {
      c++;
      freqArr.push(c);
    } else {
      c = 0;
    }
    console.log(c);
  }
  return freqArr;
}

function findMaxConsecutiveOnes(nums: number[]): number {
  let c = 0
  let m = 0
  for (let i = 0; i < nums.length; i++) {
      if (nums[i] == 1) {
          c++
      } else if (nums[i] != 1) {
          m = Math.max(m, c)
          c = 0
      }
  }
  return Math.max(m, c)
};
console.log(maxConsecutiveOnes([1, 1, 1, 0, 1, 1, 0, 0, 1, 1, 1]));
