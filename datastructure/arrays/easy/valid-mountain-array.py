from typing import List
from itertools import islice

class Solution:
    def validMountainArray(self, A: List[int]) -> bool:
        if len(A) < 3:
            return False
        max_value = max(A)
        print('max value in arr', max_value)
        max_index = A.index(max_value)
        print('max value index: ', max_index)
        # split A in two sub arrays.
        arr_one = A[:max_index]
        arr_two = A[max_index + 1:]
        validMountainArr = True

        if (len(arr_one) == 0 or len(arr_two) == 0):
            return False
        if (arr_one[0] == max_value or arr_two[0] == max_value):
            return False
        previousValue = arr_one[0]
        for val in islice(arr_one, 1, None):
            if val <= previousValue:
                return False
            previousValue = val
        previousValue = arr_two[0]
        for val in islice(arr_two, 1, None):
            if val >= previousValue:
                return False
            previousValue = val
        return validMountainArr


mountain = Solution()
# print(mountain.validMountainArray([1,2,3,4,5,4,3,2,1]))
print(mountain.validMountainArray([2,1,2]))