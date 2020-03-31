export default [
    /**
     * 冒泡排序
     * @param arr 
     */
    function (arr: number[]): number[] {
        let k = arr.length - 1
        for (let i = 0, length = arr.length; i < length; ++i) {
            let k2 = k
            for (let j = 0; j < k2; j++) {
                if (arr[j] > arr[j + 1]) {
                    k = j;
                    [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
                }
            }
        }
        return arr
    },
    function (arr: number[]): number[] {
        function bubble(left: number, right: number): boolean {
            let sorted: boolean = true
            while (++left < right) {
                if (arr[left - 1] > arr[left]) {
                    sorted = false;
                    [arr[left - 1], arr[left]] = [arr[left], arr[left - 1]]
                }
            }
            return sorted
        }
        let legth = arr.length
        while (!bubble(0, legth--));
        return arr
    },
    function (arr: number[]): number[] {
        function bubble(left: number, right: number): number {
            let last = left
            while (++left < right) {
                if (arr[left - 1] > arr[left]) {
                    last = left;
                    [arr[left - 1], arr[left]] = [arr[left], arr[left - 1]]
                }
            }
            return last
        }
        let length = arr.length
        while ((length = bubble(0, length)) > 0);
        return arr
    },
    function (arr: number[]): number[] {
        for (let i = 0, length = arr.length; i < length; ++i) {
            if (arr[i] > arr[i + 1]) {
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
                let j = i
                while (arr[j] < arr[j - 1]) {
                    [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]]
                    --j
                }
            }
        }
        return arr
    },
    /**
     * 
     * 选择排序
     */
    function (arr: number[]): number[] {
        let minIndex
        for (let i = 0, length = arr.length; i < length; ++i) {
            minIndex = i
            for (let j = i + 1; j < length; ++j) {
                if (arr[j] < arr[minIndex]) {
                    minIndex = j
                }
            }
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
        }
        return arr
    },
    /**
     * 插入排序
     */
    function (arr: number[]): number[] {
        for (let i = 0, length = arr.length; i < length; ++i) {
            let key = arr[i]
            let j = i - 1
            while (j >= 0 && arr[j] > key) {
                arr[j + 1] = arr[j]
                --j
            }
            arr[j + 1] = key
        }
        return arr
    },
    function (arr: number[]): number[] {
        for (let i = 0, length = arr.length; i < length; ++i) {
            let key = arr[i], left = 0, right = i - 1
            while (left <= right) {
                let middle = Math.floor((left + right) / 2)
                if (key < arr[middle]) {
                    right = middle - 1
                } else {
                    left = middle + 1
                }
            }
            for (let j = i - 1; j >= left; --j) {
                arr[j + 1] = arr[j]
            }
            arr[left] = key
        }
        return arr
    },

]