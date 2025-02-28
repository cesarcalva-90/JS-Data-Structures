//Google Question
//Given an array = [2,5,1,2,3,5,1,2,4]:
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1

//Given an array = [2,3,4,5]:
//It should return undefined

function FirstRecurringCharacter(arr) {
  let hashMap = {};
  for (let i = 0; i < arr.length; i++) {
    if (hashMap[arr[i]]) {
      return arr[i];
    } else {
      hashMap[arr[i]] = true;
    }
  }
}

arr1 = [2, 5, 1, 2, 3, 5, 1, 2, 4];
arr2 = [2, 1, 1, 2, 3, 5, 1, 2, 4];
arr3 = [2, 3, 4, 5];
console.log(FirstRecurringCharacter(arr1));
console.log(FirstRecurringCharacter(arr2));
console.log(FirstRecurringCharacter(arr3));
