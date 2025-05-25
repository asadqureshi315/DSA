function mult2(obj: Object) {
  let newObj: Object = {};
  for (let [k, v] of Object.entries(obj)) {
    if (typeof v == "number") {
      newObj[k] = v * 2;
    } else if (typeof v == "string") {
      newObj[k] = v.repeat(2);
    }
  }
  return newObj;
}
console.log(
  mult2({
    a: 100,
    b: 200,
    title: "My nums",
  })
);
