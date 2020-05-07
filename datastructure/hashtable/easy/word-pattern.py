class Solution:
    def wordPattern(self, pattern: str, str: str) -> bool:
        dict = {}
        str_arr = str.split(' ')
        # check Bijection
        if len(pattern) != len(str_arr):
            return False
        for i, val in enumerate(pattern):
            if val in dict:
                if dict[val] != str_arr[i]:
                    return False
            else:
                if str_arr[i] in dict.values():
                    return False
                dict[val] = str_arr[i]
        return True


word = Solution()
# print(word.wordPattern('abba', 'this one one this'))
print(word.wordPattern('abba', 'dog dog dog dog'))