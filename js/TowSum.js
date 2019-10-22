"use strict";
class TowSum {
    solution(nums, target) {
        let map = new Map();
        let arr = new Array();
        for (let i in nums) {
            map.set(nums[i], parseInt(i));
        }
        for (let j = 0; j < nums.length - 1; j++) {
            if (map.has(target - nums[j]) && map.get(target - nums[j]) != j) {
                arr.push(j, map.get(target - nums[j]));
                return arr;
            }
        }
        return [];
    }
    solution2(nums, target) {
        let temp = new Array();
        for (let i = 0, length = nums.length; i < length; i++) {
            let dif = target - nums[i];
            if (temp[dif] != undefined) {
                return [temp[dif], i];
            }
            temp[nums[i]] = i;
        }
        return [];
    }
    solution3(nums, target) {
        for (let i = 0, length = nums.length; i < length; i++) {
            let dif = target - nums[i];
            let lastIndex = nums.lastIndexOf(dif);
            if (lastIndex != -1 && lastIndex != i) {
                return [i, lastIndex];
            }
        }
        return [];
    }
    solution4(nums, target) {
        let map = new Map();
        for (let i = 0, length = nums.length; i < length; i++) {
            let dif = target - nums[i];
            if (map.has(dif)) {
                return [i, map.get(dif)];
            }
            map.set(nums[i], i);
        }
        return [];
    }
}
let towSum = new TowSum();
console.log(towSum.solution2([2, 7, 11, 15], 9));
