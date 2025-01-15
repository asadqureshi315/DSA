function MaxProductSubarr(arr: number[]) {
  let prod = 1;
  let maxProd = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    prod *= arr[i];
    if (arr[i] == 0) prod = 1;
    maxProd = Math.max(prod, maxProd);
  }
  console.log(maxProd);
  return maxProd;
}
MaxProductSubarr([1, 2, -3, 0, -4, -5]);
