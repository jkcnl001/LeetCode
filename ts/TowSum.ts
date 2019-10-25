(() => {
    class TowSum {
        solution(nums: number[], target: number): (number | undefined)[] {
            let map: Map<number, number> = new Map();
            let arr: (number | undefined)[] = new Array()
            for (let i in nums) {
                map.set(
                    nums[i],
                    parseInt(i)
                )
            }

            for (let j = 0; j < nums.length - 1; j++) {
                if (map.has(target - nums[j]) && map.get(target - nums[j]) != j) {
                    arr.push(j, map.get(target - nums[j]));
                    return arr
                }
            }
            return []
        }
        solution2(nums: number[], target: number): (number | undefined)[] {
            let temp: number[] = new Array();
            for (let i = 0, length = nums.length; i < length; i++) {
                let dif = target - nums[i];
                if (temp[dif] != undefined) {
                    return [temp[dif], i];
                }
                temp[nums[i]] = i;
            }
            return []
        }
        solution3(nums: number[], target: number): (number | undefined)[] {
            for (let i = 0, length = nums.length; i < length; i++) {
                let dif = target - nums[i];
                let lastIndex = nums.lastIndexOf(dif)
                if (lastIndex != -1 && lastIndex != i) {
                    return [i, lastIndex];
                }
            }
            return []
        }
        solution4(nums: number[], target: number): (number | undefined)[] {
            let map: Map<number, number> = new Map();
            for (let i = 0, length = nums.length; i < length; i++) {
                let dif = target - nums[i];
                if (map.has(dif)) {
                    return [i, map.get(dif)]
                }
                map.set(nums[i], i)
            }
            return []
        }
    }
    let towSum: TowSum = new TowSum()
    console.log(towSum.solution2([2, 7, 11, 15], 9))
})()
