function maxArea(height: number[]): number {
  let l = 0;
  let h = height.length - 1;
  let maxArea = -Infinity;
  while (l < h) {
    let width = h - l;
    let area = width * Math.min(height[l], height[h]);
    maxArea = Math.max(area, maxArea);
    if (height[l] < height[h]) {
      l++;
    } else {
      h--;
    }
  }
  return maxArea;
}
