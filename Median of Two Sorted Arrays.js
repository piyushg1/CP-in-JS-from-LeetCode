/**
 * https://leetcode.com/problems/median-of-two-sorted-arrays/
 * Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

The overall run time complexity should be O(log (m+n)).

 

Example 1:

Input: nums1 = [1,3], nums2 = [2]
Output: 2.00000
Explanation: merged array = [1,2,3] and median is 2.
Example 2:

Input: nums1 = [1,2], nums2 = [3,4]
Output: 2.50000
Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.
 

Constraints:

nums1.length == m
nums2.length == n
0 <= m <= 1000
0 <= n <= 1000
1 <= m + n <= 2000
-106 <= nums1[i], nums2[i] <= 106
 */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const findMedianSortedArrays = function (nums1, nums2) {
    let arr = nums1.concat(nums2)
    arr.sort((a, b) => a - b)
    const len = arr.length
    console.log(len)
    if (len % 2 === 0) {
        // return ((arr[0] + arr[length]) / 2)
        let flr = Math.floor(len / 2)
        return (arr[flr] + arr[flr - 1]) / 2
    }
    else {
        console.log(arr)
        let tmp = (len + 1) / 2
        return arr[tmp - 1]
    }
};
console.log(findMedianSortedArrays([3], [-2, -1]))