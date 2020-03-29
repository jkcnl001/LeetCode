import MedianOfTwoSortedArrays from './LetCode/Lesson4-MedianOfTwoSortedArrays'
import MaximumContinuousSubarray from './Off TheCoast/Lesson1-MaximumContinuousSubArray'
import GetSumIsZeroSubArray from './Off TheCoast/Lesson3-GetSumIsZeroSubArray'
import LongestCommonSubsequence from "./Off TheCoast/Lesson4-LongestCommonSubsequence"
import RotateStringLeft from "./Off TheCoast/Lesson5-RotateStringLeft"
import FullPermutation from "./Off TheCoast/Lesson6-FullPermutation"
import Kmp from "./Off TheCoast/Lesson7-KMP"
import GetNumBySumFromArr from "./Off TheCoast/Lesson9-GetNumBySumFromArr"
import FibonacciSequence from "./Off TheCoast/Lesson11-FibonacciSequence"
// console.log(MedianOfTwoSortedArrays[2]([], [2, 3]))
// console.log(MaximumContinuousSubarray[0]([]))
// console.log(MaximumContinuousSubarray[1]([]))
// console.log(MaximumContinuousSubarray[2]([1, -2, 3, 10, -4, 7, 2, -5]))
// console.log(GetSumIsZeroSubArray[0]([1, -2]))


// let arr = LongestCommonSubsequence[0]([undefined, "A", "B", "C", "B", "D", "A", "B"], [undefined, "B", "D", "C", "A", "B", "A"])
// for (let i = 0; i < arr[0].length; ++i) {
//     console.log(arr[0][i])
// }

// console.log(RotateStringLeft[0]("abcdef", 10.5))
// let a = FullPermutation[0](["a", "b", "c", "d"])
// console.log(a)
// var arr = ["a", "b", "c", "d"];
// var d = arr.length;
// while (d--) {
//     for (var i = 0, len = arr.length - 1; i < len; ++i) {
//         var f1 = arr[i + 1];
//         arr[i + 1] = arr[i];
//         arr[i] = f1;
//         console.log("1");
//     }
// }
// function Getnext(next: number[], t: string) {
//     let j = 0, k = -1;
//     next[0] = -1;
//     while (j < t.length - 1) {
//         if (k == -1 || t[j] == t[k]) {
//             j++; k++;
//             next[j] = k;
//         }
//         else k = next[k];//此语句是这段代码最反人类的地方，如果你一下子就能看懂，那么请允许我称呼你一声大神！
//     }
// }
// let func: Function = Kmp[1]
// console.log(func(" abcdabceedabcdabcdabceeabcdabceedabcdabcdabcee", "abcdabceedabcdabcdabcee"));
// GetNumBySumFromArr[0]([0, 1, 2, 3, 4, 5], 10)
console.log(FibonacciSequence[1](64))
setTimeout(() => {

}, 2000)