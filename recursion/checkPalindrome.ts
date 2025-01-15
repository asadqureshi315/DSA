function checkPalindrome(s: string, start: number) {
  if (start > s.length / 2) {
    return true;
  }
  if (s[start] !== s[s.length - start - 1]) {
    return false;
  }
  return checkPalindrome(s, start + 1);
}

let a: string = "racecar";
console.log(checkPalindrome(a, 0));
