/**
    Given a string, find the length of the longest substring without repeating characters.
    Example 1:

    Input: "abcabcbb"
    Output: 3 
    Explanation: The answer is "abc", with the length of 3. 
    Example 2:

    Input: "bbbbb"
    Output: 1
    Explanation: The answer is "b", with the length of 1.
    Example 3:

    Input: "pwwkew"
    Output: 3
    Explanation: The answer is "wke", with the length of 3. 
                Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
 */
export default [
    function (s: string): number {
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
    },
    function (s: string) {
        let i = 0, res = 0, n = 0;
        for (let j = 0; j < s.length; j++) {
            n = s.slice(i, j).indexOf(s[j])
            if (n == -1) {
                res = Math.max(res, j + 1 - i);
            } else {
                i += n + 1;
            }
        }
        return res;
    }
]
