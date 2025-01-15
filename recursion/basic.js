function count(n) {
  if (n == 0) {
    return;
  }
  console.log(n);
  count(n - 1);
}

count(5);

function printName(name, n) {
  if (n == 0) {
    return;
  }
  console.log(name);
  printName(name, n - 1);
}
printName("Asad", 5);
