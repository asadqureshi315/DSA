function searchMatrix(matrix: number[][], target: number): boolean {
    const r = matrix.length;
    const c = matrix[0].length;

    let low = 0;
    let high = r - 1;

    // binary search for correct row
    while (low <= high) {
        const mid = Math.floor((low + high) / 2);

        if (matrix[mid][0] <= target && target <= matrix[mid][c - 1]) {
            // binary search inside this row
            let l = 0;
            let h = c - 1;

            while (l <= h) {
                const m = Math.floor((l + h) / 2);

                if (matrix[mid][m] === target) return true;
                else if (matrix[mid][m] > target) h = m - 1;
                else l = m + 1;
            }

            return false;
        }

        if (matrix[mid][0] > target) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }

    return false;
}
