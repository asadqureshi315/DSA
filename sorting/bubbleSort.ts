function bubbleSort(arr: Array<number>) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
}

let ar = [4, 3, 2, 1, 90, 12, 65, 1, 5, 2, 9, 4, 290, 1, 4, 6];
bubbleSort(ar);
console.log(ar);
