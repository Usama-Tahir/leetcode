/**
 * Given an array nums containing n distinct numbers in the range [0, n],
 * return the only number in the range that is missing from the array.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
const missingNumber = function (nums) {
  // first sort the array in ascending order.
  nums.sort((a, b) => a - b);
  const numsLength = nums.length;
  let missingNum = numsLength;
  for (let i =0; i < numsLength; i++) {
    if (i !== nums[i]) {
        missingNum=i;
        break;
    }
  }
  return missingNum;
};

console.log(missingNumber([0,1,4, 2]))