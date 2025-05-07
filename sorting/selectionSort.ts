// save the index of min element insted  of the element itself, then check if minIndex has changed 
function selectionSort(arr: number[]): number[] {
    let n = arr.length
    for (let i = 0; i < n - 1; i++) {
        let minIndex = i
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j
            }
            if (minIndex != i) {
                [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
            }
        }
    }
    return arr
}
console.log(selectionSort([13, 46, 24, 52, 20, 9]))