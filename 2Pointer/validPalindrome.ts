function isPalindromeAdvanced(s: string): boolean {
  let sa = Array.from(s);
  let ma = sa
    .map((itm) => {
      if (/[a-z0-9A-Z]/.test(itm)) {
        return itm;
      }
      return null;
    })
    .filter(Boolean);
  let ms = ma.join("").toLowerCase();
  let l = 0;
  let h = ms.length - 1;
  while (l <= h) {
    if (ms[l] != ms[h]) {
      return false;
    }
    l++;
    h--;
  }
  return true;
}
