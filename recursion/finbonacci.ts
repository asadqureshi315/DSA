function fibonacci(n: number): number {
  if (n <= 1) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// iterative, very optimized
function fib(n: number): number {
    if(n<=1) return n
    let a=0
    let b=1
    for(let i=2;i<=n;i++){
        let fibo=a+b
        a=b
        b=fibo
    }
    return b
};

console.log(fibonacci(5));
