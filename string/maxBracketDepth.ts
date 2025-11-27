function maxDepth(s: string): number {
    // let n=s.length
    let count=0 
    let maxCount=0
    for(let itm of s){
        if(itm=="("){
            count++
            maxCount=Math.max(count,maxCount)
        }else if(itm==")"){
            count--
        }
    }
    return maxCount
};
