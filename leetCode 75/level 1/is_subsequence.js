/**
 * Given two strings s and t, return true if s is a subsequence of t, or false otherwise.
 * A subsequence of a string is a new string that is formed from the original string
 * by deleting some (can be none) of the characters without disturbing the relative positions
 * of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const validString = (val) => typeof val === "string";
const isSubsequence = function (s, t) {
  // first check if valid strings
  if (!validString(s) || !validString(t)) return false;
  // now check if t.length >= s.length
  if (s.length > t.length) return false;
  const tArr = t.split("");
  const sArr = s.split("");
  let subsequenceCount = 0;
  for (const val of tArr) {
    if ((val === sArr[subsequenceCount])) {
      subsequenceCount++;
    }
  }
  return subsequenceCount === sArr.length;
};

isSubsequence("aaaaaa", "bbaaaa");
