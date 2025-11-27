function frequencySort(s: string): string {
    let n=s.length
    let map=new Map()
    for(let itm of s){
        if(map.has(itm)){
            map.set(itm,map.get(itm)+1)
        }else{
            map.set(itm,1)
        }
    }
    let freq=[]
    map.forEach((v,k)=>{
        freq.push({v,k})
    })
    const sortedfrq=freq.sort((a,b)=>{
        return b.v-a.v
    })
    let res=sortedfrq.map((s)=>{
        return s.k.repeat(s.v)
    })
    return res.join("")
};
