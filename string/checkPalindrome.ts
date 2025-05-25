function isPalindrome(x: number): boolean {
  let strX = x.toString();
  let l = 0;
  let h = strX.length - 1;
  let isPalindrome = true;
  for (let i = 0; i <= strX.length; i++) {
    if (strX[l] != strX[h]) {
      isPalindrome = false;
    }
    l++;
    h--;
  }
  return isPalindrome;
}
