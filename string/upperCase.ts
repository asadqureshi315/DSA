function upperCase(str:string):string{
    let str_arr= str.split(" ")
    const upr=str_arr.map((itm:string)=>{
        if(/[a-zA-Z]/.test(itm[0])){
            return itm[0].toUpperCase()+itm.slice(1)
        }else{
            let j=0
            while (!/[a-zA-Z]/.test(itm[j])) {
                j += 1; 
            }
            return itm.slice(0,j) + itm[j].toUpperCase() + itm.slice(j + 1);
        }
    })
    return upr.join(" ")
}
console.log(upperCase("hi i am 1hello world"))
