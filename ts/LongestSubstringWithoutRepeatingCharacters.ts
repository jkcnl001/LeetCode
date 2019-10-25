//从左到右 遇到相同的 取长度 回到上一位相同位置的下一位
(() => {
    class LongestSubstringWithoutRepeatingCharacters {
        solution(s: string) {
            let res = 0;
            let m = '';
            for (let n of s) {
                if (m.includes(n)) {
                    res = res > m.length ? res : m.length
                    //回到前一个相同的位置的下一位
                    m = m.slice(m.indexOf(n) + 1);
                }
                m += n;
            }
            return res > m.length ? res : m.length;
        }
        solution2(s: string) {
            let i = 0, res = 0, n = 0;
            for (var j = 0; j < s.length; j++) {
                n = s.slice(i, j).indexOf(s[j])
                if (n == -1) {
                    res = Math.max(res, j + 1 - i);
                } else {
                    i += n + 1;
                }
            }
            return res;
        }
    }
    let lSWithoutRepeating = new LongestSubstringWithoutRepeatingCharacters()
    console.log(lSWithoutRepeating.solution2("abcabcbb"))
})()
