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

console.log(longestCommonPrefix(["flower", "flow", "flight"]))
console.log(longestCommonPrefix(["car","cir"]))
