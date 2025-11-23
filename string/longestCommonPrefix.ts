function longestCommonPrefix(strs: string[]): string {
    let sorted = strs.sort()
    let prefix = ""
    let first = sorted[0]
    let last = sorted[sorted.length - 1]
    for (let i = 0; i < Math.min(first.length, last.length); i++) {
        if(first[i]!=last[i]) return prefix
        prefix+=last[i]
    }
    return prefix
};
