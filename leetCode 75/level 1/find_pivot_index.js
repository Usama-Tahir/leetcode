/**
 * @param {number[]} nums
 * @return {number}
 */
const pivotIndex = function (nums) {
  let pivotIndexVal = -1;
  for (let i = 0; i < nums.length; i++) {
    // first split the array in 2.
    const arr1 = nums.slice(0, i);
    const arr2 = nums.slice(i + 1);
    // const arr1Sum = arr1.reduce((sum, currentVal) => {
    //   return sum + currentVal;
    // }, 0);
    let arr1Sum=0;
    let arr2Sum=0;

    for (let j = 0; j < arr1.length; j++) {
        arr1Sum+=arr1[j]
    }
    for (let j = 0; j < arr2.length; j++) {
        arr2Sum+=arr2[j]
    }
    // const arr2Sum = arr2.reduce((sum, currentVal) => {
    //   return sum + currentVal;
    // }, 0);
    if (arr1Sum === arr2Sum) {
      pivotIndexVal = i;
      break;
    }
  }
  return pivotIndexVal;
};

console.log(pivotIndex([1, 2, 3]));
