/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
/**
 * Runtime: 192 ms
 * Memory: 42 MB
 */
const twoSum = function (nums, target) {
  let foundIndices = false;
  let indices = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        foundIndices = true;
        indices.push(i,j);
      }
      if (foundIndices) {
        break;
      }
    }
    if (foundIndices) {
      break;
    }
  }
  return indices;
};

console.log(twoSum([3,2,4], 6))