from typing import List

class Solution:
    def validMountainArray(self, A: List[int]) -> bool:
        if len(A) < 3:
            return False
        max_value = max(A)
        print('max value in arr', max_value)
        max_index = A.index(max_value)
        print('max value index: ', max_index)
        previousValue = None
        validMountainArr = True
        if A[-1] == max_value or A[0] == max_value:
            return False
        for i, val in enumerate(A):
            if i == 0:
                previousValue = val
                continue
            if i <= max_index:
                if val <= previousValue:
                    validMountainArr = False
                    break
            if i > max_index:
                if (val >= previousValue):
                    validMountainArr = False
                    break
            previousValue = val
        return validMountainArr


mountain = Solution()
# print(mountain.validMountainArray([1,2,3,4,5,4,3,2,1]))
print(mountain.validMountainArray([0,1,2,3,4,5,6,7,8,9]))