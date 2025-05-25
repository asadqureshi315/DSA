function swapKV(obj: Object) {
  let newObj: any = {};
  for (const [k, v] of Object.entries(obj)) {
    newObj[v] = k;
    console.log(k, v);
  }
  console.log(newObj);
}
let student = { name: "Asad", age: 22 };
swapKV(student);
