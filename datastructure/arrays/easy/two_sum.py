from typing import List


class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        for num, value in enumerate(nums, start=0):
            valuetofind = target - value
            indextofind = None
            for subnum, subvalue in enumerate(nums, start=0):
                if subnum == num:
                    continue
                if subvalue == valuetofind:
                    indextofind = subnum
                    break
            if indextofind != None:
                return [num, indextofind]


car = Solution()
print(car.twoSum([2, 11, 15, 7], 9))
