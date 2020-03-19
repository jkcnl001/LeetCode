/**
 *  零子数组
 *  求数组的和接近0的子数组
 *
 * 
 * ?????????????????????????????????
 */
export default [
    function (arr: number[]): number {
        let sum: number[] = []
        sum[0] = arr[0]
        //求出所有sum[i] (数组的前i项和)
        for (let i = 1, length = arr.length; i < length; ++i) {
            sum[i] = sum[i - 1] + arr[i]
        }
        let min1 = Math.abs(sum[0])
        for (let i = 1, length = sum.length; i < length; ++i) {
            let temp = Math.abs(sum[i])
            if (temp < min1) {
                min1 = Math.abs(sum[i])
            }
        }
        sum = sum.sort((left, right) => left - right)
        let min2 = Math.abs(sum[0] - sum[1])
        for (let i = 2, length = sum.length; i < length; ++i) {
            let temp = Math.abs(sum[i] - sum[i - 1])
            if (temp < min2) {
                min2 = temp
            }
        }
        return Math.min(min2, min1)
    }
]