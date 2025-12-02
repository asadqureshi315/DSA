function flattenArr(arr:any,na:any){
    let i=0
    while(i<arr.length){
        if(typeof arr[i]=="number"){
            na.push(arr[i])
            i++
        }else if(typeof arr[i]=="object"){
            flattenArr(arr[i],na)
            i++
        }
    }
    return na
}

console.log(flattenArr([1,2,[3,4,[5,6]]],[]))

