/**
 * You are climbing a staircase. It takes n steps to reach the top.
 * Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
 */

/**
 * @param {number} n
 * @return {number}
 */
const map = new Map();
const climbStairs = function (n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  if (n === 2) return 2;

  if (map.get(n)) return map.get(n);
  const nestedClimnStairs = climbStairs(n - 1) + climbStairs(n - 2);
  map.set(n, nestedClimnStairs);
  return nestedClimnStairs;
};

console.log("aa: ", climbStairs(45));
