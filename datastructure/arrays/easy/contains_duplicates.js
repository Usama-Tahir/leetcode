/**
 * @param {number[]} nums
 * @return {boolean}
 */

/**
 * Runtime: 97 ms
 * Memory: 52.1 MB
 */
const containsDuplicate = function (nums) {
  let foundDuplicate = false;
  const dictObj = {};
  for (const num of nums) {
    if (dictObj[num]) {
      foundDuplicate = true;
      break;
    } else {
      dictObj[num] = 1;
    }
  }
  return foundDuplicate;
};

// // one other implementation

// const containsDuplicate = function(nums) {
//     return nums.length !== new Set(nums).size;
// };

containsDuplicate([1, 2, 3, 1]);
