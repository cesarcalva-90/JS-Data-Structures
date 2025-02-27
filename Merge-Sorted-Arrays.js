function mergeArrays(array1, array2) {
  // Assume input is always 2 arrays that are already sorted
  let finalArray = [];
  let i = 0;
  let j = 0;
  let valueArray1 = array1[i];
  let valueArray2 = array2[j];

  //Check special conditions
  if (array1.length === 0) {
    return array2;
  }
  if (array2.length === 0) {
    return array1;
  }

  // Merge arrays to create final array
  while (valueArray1 || valueArray2)
    if (valueArray1 < valueArray2) {
      finalArray.push(valueArray1);
      i++;
      valueArray1 = array1[i];
    } else {
      finalArray.push(valueArray2);
      j++;
      valueArray2 = array2[j];
    }

  return finalArray;
}

// [1, 2, 3, 7, 8, 9]

const arr1 = [1, 2, 3, 7, 9];
const arr2 = [7, 8, 9, 10];

console.log(mergeArrays(arr1, arr2));
