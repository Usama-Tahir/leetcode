/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
/**
 * Runtime: 63 ms
 * Memory: 42.3 MB
 */
const intersect = function (nums1, nums2) {
  const resulArr = [];
  for (let i = 0; i < nums1.length; i++) {
    const currentIndexVal = nums1[i];
    const index = nums2.indexOf(currentIndexVal);
    if (index === -1) continue;
    nums2.splice(index, 1);
    resulArr.push(currentIndexVal);
  }
  return resulArr;
};

const nums1 = [4,9,5],
  nums2 = [9,4,9,8,4];
console.log(intersect(nums1, nums2));
