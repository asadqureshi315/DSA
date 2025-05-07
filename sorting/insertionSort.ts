// the inner loop will comapre with the sorted or the last part of the array do the loop will run from the end 
function insertionSort(arr: number[]): number[] {
    let n = arr.length
    for (let i = 0; i < n; i++) {
        let j = i
        while (j > 0 && arr[j-1] > arr[j]) {

            [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]]

            j--
        }
    }
    return arr
}
console.log(insertionSort([13, 46, 24, 52, 20, 9]))