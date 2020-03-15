/**
 *   最大数组连续子数组
 *      给定一个数组A[0,...,n-1] 求A的连续子数组 使得该子数组的和最大
 *
 *   列如
 *      数组:[1,-2,3,10,-4,7,2,-5]
 *      最大子数组:[3,10,-4,7,2]
 *      18
 */
export default [
    //Violence method   O(n^3)
    function (arr: number[]) {
        if (0 === arr.length) {
            return undefined
        }
        let maxSum = arr[0]
        let currentSum = arr[0];
        for (let i = 0, length = arr.length; i < length; ++i) {
            for (let j = i; j < length; ++j) {
                currentSum = arr[i]
                for (let k = i + 1; k <= j; ++k) {
                    currentSum += arr[k]
                }
                if (currentSum > maxSum) maxSum = currentSum
            }
        }
        return maxSum
    },
    //分治  O(nlogn)
    function (arr: number[]): number | undefined {
        if (0 === arr.length) {
            return undefined
        }
        function MaxAddSub(arr: number[], from: number, to: number): number {
            if (to == from) {
                return arr[from]
            }
            let middle = Math.floor((from + to) * 0.5)
            let m1 = MaxAddSub(arr, from, middle)
            let m2 = MaxAddSub(arr, middle + 1, to)

            let left = arr[middle], now = arr[middle]
            for (let i = middle - 1; i >= from; --i) {
                now += arr[i]
                left = Math.max(now, left)
            }

            let right = arr[middle + 1]
            now = arr[middle + 1]
            for (let i = middle + 2; i <= to; ++i) {
                now += arr[i]
                right = Math.max(now, right)
            }
            return Math.max(m1, m2, left + right)
        }
        return MaxAddSub(arr, 0, arr.length - 1)
    },
    //分析法  O(n)
    function (arr: number[]): number | undefined {
        if (arr.length < 0) {
            return undefined
        }

        let max = arr[0]
        let sum = arr[0]
        for (let i = 1, length = arr.length; i < length; ++i) {
            if (sum > 0) {
                sum += arr[i]
            } else {
                sum = arr[i]
            }
            if (sum > max) {
                max = sum
            }
        }
        return max
    }
]