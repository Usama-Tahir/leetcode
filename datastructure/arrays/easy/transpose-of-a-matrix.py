from typing import List

class Solution:
    def transpose(self, A: List[List[int]]) -> List[List[int]]:
        if not len(A):
            return []
        if not len(A[0]):
            return [[]]
        no_of_arr = len(A[0])
        transposed_list = [[]for _ in range(no_of_arr)]
        for i, list in enumerate(A):
            for j, val in enumerate(list):
                transposed_list[j].insert(i, val)
        return transposed_list

mountain = Solution()
print(mountain.transpose( [[1,2,3],[4,5,6]] ))
