/**
 * Given two strings s and t, determine if they are isomorphic.
 * Two strings s and t are isomorphic if the characters in s can be replaced to get t.
 * All occurrences of a character must be replaced with another character while preserving the order of characters.
 * No two characters may map to the same character, but a character may map to itself.
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

const charactersMap = {};
const isIsomorphic = function (s, t) {
  let isIsomorphirString = true;
  if (s.length !== t.length) {
    isIsomorphirString = false;
    return isIsomorphirString;
  }
  for (let i = 0; i < s.length; i++) {
    // first check if s[i] is found in `charactersMap`
    if (
      (charactersMap[s[i]] && charactersMap[s[i]] !== t[i])
    ) {
      isIsomorphirString = false;
      break;
    } else {
      charactersMap[s[i]] = t[i];
    }
  }
  return isIsomorphirString;
};
console.log(
  isIsomorphic("paper", "title")
);
