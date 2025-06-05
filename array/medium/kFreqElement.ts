function topKFrequent(nums: number[], k: number): number[] {
  let map = new Map();
  nums.map((num) => {
    if (map.has(num)) {
      let v = map.get(num);
      map.set(num, v + 1);
    } else {
      map.set(num, 1);
    }
  });
  const sorted = [...map.entries()].sort((a, b) => b[1] - a[1]);
  return sorted.slice(0, k).map((itm) => itm[0]);
}
