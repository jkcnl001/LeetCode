/**
 *  LCS 最长公共子序列
 *      （相同元素）
 *
 *
 */
export default [
    function <T>(arr1: T[], arr2: T[]) {
        let m = arr1.length, n = arr2.length
        const arr3 = new Array
        const arr4 = new Array
        for (let i = 1; i < m; ++i) {
            if (arr3[i] == undefined) {
                arr3[i] = []
            }
            arr3[i][0] = 0
        }
        arr3[0] = []
        for (let i = 1; i < n; ++i)arr3[0][i] = 0
        for (let i = 1; i < m; ++i) {
            for (let j = 1; j < n; ++j) {
                if (arr1[i] == arr2[j]) {
                    arr3[i][j] = arr3[i - 1][j - 1] + 1
                    if (arr4[i] === undefined) { arr4[i] = [] }
                    arr4[i][j] = "↖"
                } else if (arr3[i - 1][j] >= arr3[i][j - 1]) {
                    arr3[i][j] = arr3[i - 1][j];
                    if (arr4[i] === undefined) { arr4[i] = [] }
                    arr4[i][j] = "↑"
                } else {
                    arr3[i][j] = arr3[i][j - 1]
                    if (arr4[i] === undefined) { arr4[i] = [] }
                    arr4[i][j] = "←"
                }
            }
        }
        return [arr3, arr4]
    }
]