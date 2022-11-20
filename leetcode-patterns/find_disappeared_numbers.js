/**
 * Given an array nums of n integers where nums[i] is in the range [1, n],
 * return an array of all the integers in the range [1, n] that do not appear in nums.
 */

/**
 * @param {num} num
 * @param {num[]} nums
 * @return {boolean}
 */
const numFoundInArr = (nums, num) => {
  const element = nums.find((val) => val === num);
  if (element === undefined) {
    return false;
  }
  return true;
};

/**
 * @param {number[]} nums
 * @return {number[]}
 */

const findDisappearedNumbers = function (nums) {
  const numsLength = nums.length;
  let missingNumArr = [];
  for (let i = 1; i <= numsLength; i++) {
    if (!numFoundInArr(nums, i)) {
      missingNumArr.push(i);
    }
  }
  return missingNumArr;
};

console.log(findDisappearedNumbers([4,3,2,7,8,2,3,1]))
