function factorial(n, fact) {
  console.log(n, fact);
  if (n == 1) {
    console.log(fact);
    return fact;
  }
  factorial(n - 1, fact * n);
}
factorial(4, 1);

function factorial(n:number):number{
    if(n<=1) return 1
    return n*factorial(n-1)
}
console.log(factorial(5))
