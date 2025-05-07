function quickSort(arr: number[]): number[] {
    if (arr.length <= 1) return arr; // Base case: single-element or empty array

    let pivot = arr[0]; // Choose the first element as the pivot
    let left: number[] = [];
    let right: number[] = [];

    for (let i = 1; i < arr.length; i++) { // Start from index 1 to avoid including pivot in the loop
        if (arr[i] <= pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    // Recursively sort left and right partitions
    let sortedLeft = quickSort(left);
    let sortedRight = quickSort(right);

    // Combine sorted left, pivot, and sorted right
    return [...sortedLeft, pivot, ...sortedRight];
}

// Example usage
console.log(quickSort([4, 6, 1, 5, 3, 2])); // Output: [1, 2, 3, 4, 5, 6]
