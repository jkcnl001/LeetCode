/**
 *  字符串循环左移
 *       给定字符串 S 前K个字符移动到S的尾部
 *       列如:
 *         abcdef   ->   cdefab
 */
export default [
    //翻转三次法  O(N) 
    function (str: string, mid: number): string {
        function reverse(str: string, from: number, to: number) {
            let strArr = str.split('')
            while (from < to && strArr[from]) {
                let temp = strArr[from]
                strArr[from++] = strArr[to]
                strArr[to--] = temp
            }
            return strArr.join('')
        }
        str = reverse(str, 0, mid - 1)
        str = reverse(str, mid, str.length - 1)
        str = reverse(str, 0, str.length - 1)
        return str
    }
]