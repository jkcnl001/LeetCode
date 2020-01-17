/**
    Given an array of integers, return indices of the two numbers such that they add up to a specific target.
    You may assume that each input would have exactly one solution, and you may not use the same element twice.

    Example:
          Given nums = [2, 7, 11, 15], target = 9,
          Because nums[0] + nums[1] = 2 + 7 = 9,
          return [0, 1].
 */
const towSum = [
    function (numbers: number[], target: number): number[] {
        for (let i = 0, length = numbers.length; i < length; i++) {
            let differ = target - numbers[i];
            //j 从 i + 1 开始
            for (let j = i + 1; j < length; ++i) {
                if (numbers[j] == differ) {
                    return [numbers[i], numbers[j]]
                }
            }
        }
        return []
    },
    function (numbers: number[], target: number): number[] {
        let map: Map<number, number> = new Map();
        let arr: number[] = new Array()
        numbers.forEach((element, index) => {
            map.set(
                element,
                index
            )
        })
        // length = numbers.length - 1
        for (let j = 0; j < numbers.length - 1; j++) {
            if (map.has(target - numbers[j]) != undefined && map.get(target - numbers[j]) != j) {
                arr.push(j, map.get(target - numbers[j]) as number);
                return arr
            }
        }
        return []
    },
    function (numbers: number[], target: number): number[] {
        let map: Map<number, number> = new Map();
        for (let i = 0, length = numbers.length; i < length; i++) {
            let differ = target - numbers[i];
            if (map.has(differ)) {
                return [i, map.get(differ) as number]
            }
            map.set(numbers[i], i)
        }
        return []
    }
]
export default towSum




