function isAnagram(s: string, t: string): boolean {
  if (s.length != t.length) {
    return false;
  }
  let map = new Map();
  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i])) {
      let val = map.get(s[i]);
      map.set(s[i], (val += 1));
    } else {
      map.set(s[i], 1);
    }
  }
  for (let i = 0; i < t.length; i++) {
    if (map.has(t[i]) && map.get(t[i]) != 0) {
      map.set(t[i], map.get(t[i]) - 1);
    } else {
      return false;
    }
  }
  return true;
}
