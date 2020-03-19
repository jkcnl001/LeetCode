/**
 *  查找旋转数组的最小值
 *    假定一个排序数组[0,1,2,3,4,5,6,7]以某个未知元素为支点旋转后得到 [4,5,6,7,0,1,2]
 *    找出旋转后的最小值
 *
 *
 */
export default [
    //二分法
    function (arr: number[]): number {
        let left = 0
        let right = arr.length - 1
        let mid
        while (left < right) {
            mid = (left + right) >> 1
            if (arr[mid] < arr[right])  //最小值在左边
                right = mid
            else if (arr[mid] > arr[right])//最小值在右边
                left = mid
        }
        return arr[left]
    }
]