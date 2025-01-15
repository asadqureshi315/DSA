//variety 2 where pos and neg may not be same
function rearrangebySignVariety2(arr: Array<number>) {
  let l = arr.length;
  let pos: Array<number> = [];
  let neg: Array<number> = [];
  for (let i = 0; i < l; i++) {
    if (arr[i] > 0) {
      pos.push(arr[i]);
    } else {
      neg.push(arr[i]);
    }
  }
  if (pos.length > neg.length) {
    for (let i = 0; i < neg.length; i++) {
      arr[i * 2] = pos[i];
      arr[i * 2 + 1] = neg[i];
    }
    for (let i = neg.length; i < pos.length; i++) {
      arr[i] = pos[i];
    }
  } else {
    for (let i = 0; i < pos.length; i++) {
      arr[i * 2] = pos[i];
      arr[i * 2 + 1] = neg[i];
    }
    for (let i = pos.length; i < neg.length; i++) {
      arr[i] = neg[i];
    }
  }
  console.log(arr);
}

//approach 1 where we use 2 arr pos and neg
function rearrangebySign(arr: Array<number>) {
  let l = arr.length;
  let pArr: Array<number> = [];
  let nArr: Array<number> = [];
  for (let i = 0; i < l; i++) {
    if (arr[i] > 0) {
      pArr.push(arr[i]);
    } else {
      nArr.push(arr[i]);
    }
  }
  for (let i = 0; i < pArr.length; i++) {
    arr[i * 2] = pArr[i];
    arr[i * 2 + 1] = nArr[i];
  }
  console.log(arr);
}
//approach 2 where we use single arr
function rearrangebySign2(arr: Array<number>) {
  let l = arr.length;
  let ans = new Array(l);
  let pi = 0;
  let ni = 1;
  for (let i = 0; i < l; i++) {
    if (arr[i] > 0) {
      ans[pi] = arr[i];
      pi += 2;
    } else {
      ans[ni] = arr[i];
      ni += 2;
    }
  }
  console.log(ans);
}

// rearrangebySign([1, 2, -4, -5]);
// rearrangebySign2([1, 2, -4, -5]);
rearrangebySignVariety2([1, 2, 3, -4, -1, 6, -7, -3, -5]);
