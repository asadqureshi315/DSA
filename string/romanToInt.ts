function romanToInt(s: string): number {
    let dict = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }
    let n = s.length
    let res = 0
    for (let i = 0; i < n - 1; i++) {
        if(dict[s[i]]<dict[s[i+1]]){
            res-=dict[s[i]]
        }else{
            res+=dict[s[i]]
        }
    }
    res+=dict[s[n-1]]
    return res
};
