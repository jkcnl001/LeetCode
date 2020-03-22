export default [
    /**
     *  暴力法
     * @param str 
     * @param substr 
     */
    function (str: string, substr: string): number {
        let i = 0, j = 0, k = 0
        while (i < str.length && j < substr.length) {
            if (str[i] === substr[j]) {
                ++i;
                ++j
            } else {
                j = 0
                i = ++k
            }
        }
        if (j == substr.length) {
            return k
        } else {
            return -1
        }
    },
    /**
     * KMP 算法
     * @param str 
     * @param substr 
     * @param next 
     */
    function (str: string, match: string): number[] {
        function getNext(match: string): number[] {
            let next: number[] = [-1]
            for (let i = 1, j = -1, length = match.length; i < length; ++i) {
                while (j > -1 && match[i] !== match[j + 1]) { //回溯
                    j = next[j];
                }
                if (match[i] === match[j + 1]) {
                    j = j + 1;
                }
                next[i] = j;
            }
            return next
        }
        const next = getNext(match)
        console.log(JSON.stringify(next))
        let i = 0, j = 0, res = []
        const m = str.length, n = match.length
        while (i < m - n + j + 1) {
            if (str[i] === match[j]) {
                ++i
                ++j
                if (j == n) { //得到所有匹配
                    res.push(i - n)
                    j = next[j - 1] + 1
                }
            } else {
                if (j === 0) {
                    ++i
                } else {
                    j = next[j - 1] + 1
                }
            }
        }
        return res
    },
]  