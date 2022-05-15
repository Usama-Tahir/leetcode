/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

/**
 * Runtime: 68 ms
 * Memory: 41.9 MB
 */

const merge = function (nums1, m, nums2, n) {
  nums1.splice(m, n);
  let counter = 0;
  for (let i = 0; i < nums1.length; i++) {
    for (let j = 0; j < n; j++) {
      if (nums2[j] <= nums1[i]) {
        nums1.splice(i, 0, nums2[j]);
        counter++;
        i++;
      } else {
        break;
      }
    }
    nums2.splice(0, counter);
    counter = 0;
  }
  nums1.push(...nums2);
};
const arr1 = [2,0];
const arr2 = [1];
const m = 1;
const n = 1;
merge(arr1, m, arr2, n);

console.log(arr1);
