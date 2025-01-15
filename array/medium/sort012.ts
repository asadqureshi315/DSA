/**
 Do not return anything, modify nums in-place instead.
 */
function sortColors(nums: number[]): void {
  let freq = { 0: 0, 1: 0, 2: 0 };
  let n = nums.length;
  for (let i = 0; i < n; i++) {
    freq[nums[i]] += 1;
  }
  for (let i = 0; i < freq[0]; i++) {
    nums[i] = 0;
  }
  for (let i = freq[0]; i < freq[0] + freq[1]; i++) {
    nums[i] = 1;
  }
  for (let i = freq[0] + freq[1]; i < n; i++) {
    nums[i] = 2;
  }
}
