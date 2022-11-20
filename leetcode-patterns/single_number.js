/**
 * Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
 * You must implement a solution with a linear runtime complexity and use only constant extra space.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = function (nums) {
  const objMap = {};
  for (let i = 0; i < nums.length; i++) {
    if (objMap[`${nums[i]}`]) {
      objMap[`${nums[i]}`] = objMap[`${nums[i]}`] + 1;
    } else {
      objMap[`${nums[i]}`] = 1;
    }
  }
  return Object.keys(objMap).filter((key) => objMap[key] <= 1)[0];
};

console.log(singleNumber([4,1,2,1,2]))