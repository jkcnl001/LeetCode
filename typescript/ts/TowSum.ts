/**
    Given an array of integers, return indices of the two numbers such that they add up to a specific target.
    You may assume that each input would have exactly one solution, and you may not use the same element twice.

    Example:
          Given nums = [2, 7, 11, 15], target = 9,
          Because nums[0] + nums[1] = 2 + 7 = 9,
          return [0, 1].
 */
(() => {
    class TowSum {
        solution1(numbers: number[], target: number): (number | undefined)[] {
            let map: Map<number, number> = new Map();
            let arr: (number | undefined)[] = new Array()
            numbers.forEach((element, index) => {
                map.set(
                    element,
                    index
                )
            })
            for (let j = 0; j < numbers.length - 1; j++) {
                if (map.has(target - numbers[j]) && map.get(target - numbers[j]) != j) {
                    arr.push(j, map.get(target - numbers[j]));
                    return arr
                }
            }
            return []
        }
        solution2(numbers: number[], target: number): (number | undefined)[] {
            let temp: number[] = new Array();
            for (let i = 0, length = numbers.length; i < length; i++) {
                let differ = target - numbers[i];
                if (temp[differ] != undefined) {
                    return [temp[differ], i];
                }
                temp[numbers[i]] = i;
            }
            return []
        }
        solution3(numbers: number[], target: number): (number | undefined)[] {
            for (let i = 0, length = numbers.length; i < length; i++) {
                let differ = target - numbers[i];
                let lastIndex = numbers.lastIndexOf(differ)
                if (lastIndex != -1 && lastIndex != i) {
                    return [i, lastIndex];
                }
            }
            return []
        }
        solution4(numbers: number[], target: number): (number | undefined)[] {
            let map: Map<number, number> = new Map();
            for (let i = 0, length = numbers.length; i < length; i++) {
                let differ = target - numbers[i];
                if (map.has(differ)) {
                    return [i, map.get(differ)]
                }
                map.set(numbers[i], i)
            }
            return []
        }
    }
    console.time("3")
    let towSum: TowSum = new TowSum()
    console.timeEnd("3")

    console.time("1")
    console.log(towSum.solution2([2, 7, 11, 15], 9))
    console.timeEnd("1")

    console.time("2")
    console.log(towSum.solution1([2, 7, 11, 15], 9))
    console.timeEnd("2")

})()
