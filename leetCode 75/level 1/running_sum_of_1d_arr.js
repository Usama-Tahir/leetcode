// First solution in N^2

/**
 * @param {number[]} nums [1,2,3,4]
 * @return {number[]}
 */
// const runningSum = function (nums) {
//     const runningSumArr = [];
//     for (let i = 0; i < nums.length; i++) {
//         let currentIndexSum = 0;
//         for (let j = 0; j <= i; j++) {
//             currentIndexSum+=nums[j];
//         }
//         runningSumArr.push(currentIndexSum);
//     }
//     return runningSumArr;
// };

/**
 * @param {number[]} nums
 * @return {number[]}
 */
const runningSum = function (nums) {
  const runningSumArr = [];
  let currentIndexSum = 0;
  for (const num of nums) {
    currentIndexSum += num;
    runningSumArr.push(currentIndexSum);
  }
  return runningSumArr;
};
