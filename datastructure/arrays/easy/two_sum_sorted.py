from typing import List


class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        dict = {}
        for i, num in enumerate(nums):
            numtofind = target - num
            if numtofind in dict:
                return [dict[numtofind], i + 1]
            else:
                dict[num] = i + 1



car = Solution()
print(car.twoSum([2, 2,  11, 15, 7], 9))
