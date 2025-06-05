function groupAnagrams(strs: string[]): string[][] {
  let na = strs.map((itm) => {
    return [...itm].sort().join("");
  });
  let set = new Set(na);
  let ag = new Map();
  strs.map((itm) => {
    let val = [...itm].sort().join("");
    if (ag.has(val)) {
      ag.set(val, [...ag.get(val), itm]);
    } else {
      ag.set(val, [itm]);
    }
  });
  let fin = [];
  ag.forEach((v, k) => {
    fin.push(v);
  });
  return fin;
}

//Optimal

// function groupAnagrams(strs: string[]): string[][] {
//     const ag = new Map<string, string[]>();

//     for (const str of strs) {
//         const key = [...str].sort().join("");
//         if (ag.has(key)) {
//             ag.get(key)!.push(str);
//         } else {
//             ag.set(key, [str]);
//         }
//     }

//     return Array.from(ag.values());
// }
