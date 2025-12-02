function flattenArr(arr:any,na:any, deg:number, curDeg:number){
    let i=0
    while(i<arr.length){
        if(typeof arr[i]=="number"){
            na.push(arr[i])
            i++
        }else if(typeof arr[i]=="object"){
            if(curDeg<deg){
                flattenArr(arr[i],na, deg, curDeg+1)
                i++
            }else{
                na.push(arr[i])
                i++
            }
        }
    }
    return na
}

console.log(flattenArr([1,2,[3,4,[5,6]]],[],2, 0))
