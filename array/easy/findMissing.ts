// with hashing:
function missingNumber(a, N) {
    const hash = new Array(N + 1).fill(0); // hash array
    
    // storing the frequencies:
    for (let i = 0; i < N - 1; i++) {
        hash[a[i]]++;
    }
    
    // checking the frequencies for numbers 1 to N:
    for (let i = 1; i <= N; i++) {
        if (hash[i] === 0) {
            return i;
        }
    }
    
    // The following line will never execute.
    // It is just to avoid warnings.
    return -1;
}

function main() {
    const N = 5;
    const a = [1, 2, 4, 5];
    const ans = missingNumber(a, N);
    console.log("The missing number is:", ans);
}

main();

//with sorting and iterating:
// function missingNumber(nums: number[]): number {
//     nums.sort((a,b)=>a-b)
//     if(nums[0]!=0) return 0
//     let n=nums.length
//     if(nums[n-1]!=n) return n
//     let m:number=0
//     for(let i=0;i<n;i++){
//         console.log(nums[i],i)
//         if(nums[i]!=i){
//             m=i
//             break
//         }
//     }
//     console.log(m)
//     return m
// };

//use formula  (n*(n+1))/2 for finding sum