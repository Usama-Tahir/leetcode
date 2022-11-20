/**
 * Given an integer array nums, return true if any value appears at least twice in the array,
 * and return false if every element is distinct.
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = function (nums) {
  if (!nums || !nums.length) {
    return false;
  }
  const numsMap = {};
  let foundDuplicate = false;
  for (let i = 0; i < nums.length; i++) {
    if (numsMap[`${nums[i]}`]) {
      foundDuplicate = true;
      break;
    } else {
      numsMap[`${nums[i]}`] = `${nums[i]}`;
    }
  }
  return foundDuplicate;
};

console.log(containsDuplicate([0,4,5,0,3,6]))
