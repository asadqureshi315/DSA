function factorial(n, fact) {
  console.log(n, fact);
  if (n == 1) {
    console.log(fact);
    return fact;
  }
  factorial(n - 1, fact * n);
}
factorial(4, 1);
