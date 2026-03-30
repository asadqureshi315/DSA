function revereseNumber(n: number): number {
    if (n < 0) return n
    let ans = 0
    while (n > 0) {
        let lastDigit = n % 10
        ans = ans * 10 + lastDigit
        n = Math.floor(n / 10)
        console.log({lastDigit, ans, n})
    }
    return ans
}
console.log(revereseNumber(192))
