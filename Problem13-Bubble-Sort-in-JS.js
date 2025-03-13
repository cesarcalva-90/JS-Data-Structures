function BubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let tempValue = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tempValue;
      }
    }
  }
  return arr;
}

const arr = [77, 5, 46, 32, 1, 2, 8];

console.log(BubbleSort(arr));
