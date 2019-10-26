
import { Tool } from "./Tool"
(() => {
    class MedianOfTwoSortedArrays {
        solution(nums1: number[], nums2: number[]): number | undefined {
            const num = [...nums1, ...nums2].sort((a, b) => a - b)
            if (num.length % 2 == 0) return (num[num.length / 2 - 1] + num[num.length / 2]) / 2
            else return num[(num.length - 1) / 2]
        }
        solution2(nums1: number[], nums2: number[]): number | undefined {
            const len1 = nums1.length, len2 = nums2.length;
            const mid = len1 + len2 >> 1; // 中位数位置, 取mid mid+1两个
            let i = 0, j = 0, cur = 0, n1 = 0, n2 = 0;
            while (true) {
                if (j === len2 || nums1[i] < nums2[j]) {
                    cur = nums1[i];
                    i++;
                } else {
                    cur = nums2[j];
                    j++;
                }
                if (i + j === mid) {
                    n1 = cur
                }
                if (i + j === mid + 1) {
                    n2 = cur;
                    break;
                }
            }
            return (len1 + len2) % 2 === 0 ? (n1 + n2) / 2 : n2;
        }
        solution3(nums1: number[], nums2: number[]): number | undefined {
            if (nums1.length > nums2.length) {
                let temp = nums1
                nums1 = nums2
                nums2 = temp
            }
            const length1 = nums1.length
            const length2 = nums2.length
            let min = 0, max = length2, half = (length2 + length1 + 1) >> 1, i = 0, j = 0
            while (min <= max) {
                i = (min + max) >> 1
                j = half - i
                if (i < length1 && nums2[j - 1] > nums1[i]) {
                    min = i + 1
                } else if (i > 0 && nums1[i - 1] > nums2[j]) {
                    max = i - 1
                } else {
                    let max_left = 0
                    if (i == 0) {
                        max_left = nums2[j - 1]
                    } else if (j == 0) {
                        max_left = nums1[i - 1]
                    } else {
                        max_left = Math.max(nums1[i - 1], nums2[j - 1])
                    }
                    if ((length1 + length2) % 2 == 1) {
                        return max_left
                    }
                    let min_right = 0
                    if (i == length1) {
                        min_right = nums2[j]
                    } else if (j == length2) {
                        min_right = nums1[i]
                    } else {
                        min_right = Math.min(nums1[i], nums2[j])
                    }
                    return (max_left + min_right) / 2
                }
            }

        }
    }

    let mdianOfTwoSortedArrays = new MedianOfTwoSortedArrays

    console.log(mdianOfTwoSortedArrays.solution3([1, 2], [3, 4]))

})()