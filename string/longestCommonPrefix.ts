function longestCommonPrefix(s: string[]):any {
    let n = s.length
    s.sort()
    let common = ""
    for (let i = 0; i < s[0].length; i++) {
        let ch = s[0][i]
        let isPresent=true
        for (let j = 1; j < n; j++) {
            if(s[j][i]!==ch){
                isPresent=false
            }
        }
        if(isPresent){
            common+=ch
        }else{
            return common
        }
    }
    return common
}

function longestCommonPrefix(strs: string[]): string {
    let sorted = strs.sort()
    let prefix = ""
    let first = sorted[0]
    let last = sorted[sorted.length - 1]
    for (let i = 0; i < Math.min(first.length, last.length); i++) {
        if (first[i] != last[i]) return prefix
        prefix += last[i]
    }
    return prefix
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]))
console.log(longestCommonPrefix(["car","cir"]))
