/**
 * @param {number[]} nums
 * @return {number}
 */
// // probably n^2 complexity.
const maxSubArray = function (nums) {
  let maxVal;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i; j < nums.length; j++) {
      const slicedArr = nums.slice(i, j + 1);
      const currentSubArrMaxVal = slicedArr.reduce((a, b) => a + b, 0);
      if (!maxVal && maxVal !== 0) {
        maxVal = currentSubArrMaxVal;
      }
      maxVal = currentSubArrMaxVal > maxVal ? currentSubArrMaxVal : maxVal;
    }
  }
  return maxVal;
};

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));
