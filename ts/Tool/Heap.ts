export enum HeapType {
    min,
    max
}
const Heap = {
    /**
     * @description: 父节点下标 从0开始
     * @param {number} 
     */
    getParentIndex: function (n: number) {
        return n === 0 ? -1 : n >> 1;
    },

    /**
     * @description: 左孩子下标
     * @param {number} 
     */
    getLeftIndex: function (n: number) {
        return (n << 1) + 1;
    },

    /**
     * @description: 右孩子下标
     * @param {number} 
     */
    getRightIndex: function (n: number) {
        return (n << 1) + 2;
    },

    /**
     * @description: 数组转为最小堆 
     * @param {number} 
     * @param {number[]} 
     * @return: 
     */
    buildMinHeap: function (data: number[]) {
        for (let i = data.length - 1; i > data.length >> 1; --i) {
            this.up(i, data, HeapType.min, true);
        }
        return data;
    },

    /**
     * @description: 数组转为最大堆 
     * @param {number} 
     * @param {number[]} 
     * @return: 
     */
    buildMaxHeap: function (data: number[]) {
        for (let i = data.length - 1; i > data.length >> 1; --i) {
            this.up(i, data, HeapType.max, true);
        }
        return data;
    },

    /**
     * @description: 检测是否可以上浮
     * @param {number} 
     * @param {number} 
     * @param {HeapType} 
     * @return: 
     */
    checkUp(value: number, parent: number, type: HeapType = HeapType.min) {
        switch (type) {
            case HeapType.min: {
                return parent > value;
            }
            case HeapType.max: {
                return parent < value;
            }
        }
    },

    /**
     * @description: 检测是否可以下层
     * @param {number} 
     * @param {number} 
     * @param {HeapType} 
     * @return: 
     */
    checkDown(value: number, child: number, type: HeapType = HeapType.min) {
        switch (type) {
            case HeapType.min: {
                return child < value;
            }
            case HeapType.max: {
                return child > value;
            }
        }
    },

    /**
     * @description: 上浮
     * @param {i} 下标 
     * @param {number[]} 堆
     * @param {boolean}  是否是初始化
     */
    up: function (i: number, data: number[], type: HeapType = HeapType.min, isInit: boolean = false) {
        let parentIndex = this.getParentIndex(i);
        if (isInit) {
            while (data[parentIndex] !== undefined) {
                if (this.checkUp(data[i], data[parentIndex], type)) {
                    [data[parentIndex], data[i]] = [data[i], data[parentIndex]];
                }
                i = parentIndex;
                parentIndex = this.getParentIndex(i);
            }
        } else {
            while (this.checkUp(data[i], data[parentIndex], type)) {
                [data[parentIndex], data[i]] = [data[i], data[parentIndex]];
                i = parentIndex;
                parentIndex = this.getParentIndex(i);
            }
        }
    },

    /**
     * @description: 下沉
     * @param {i} 下标 
     * @param {number[]} 堆
     */
    down: function (i: number, data: number[], type: HeapType = HeapType.min, isInit: boolean = false) {
        let minIndex = this.getMinChildIndex(i, data);
        if (isInit) {
            while (minIndex !== -1) {
                if (this.checkDown(data[i], data[minIndex], type)) {
                    [data[i], data[minIndex]] = [data[minIndex], data[i]];
                }
                i = minIndex;
                minIndex = this.getMinChildIndex(i, data);
            }
        } else {
            while (minIndex !== -1 && this.checkDown(data[i], data[minIndex], type)) {
                [data[i], data[minIndex]] = [data[minIndex], data[i]];
                i = minIndex;
                minIndex = this.getMinChildIndex(i, data);
            }
        }
    },

    /**
     * @description: 获取左右子节点中更小的
     * @param {number}  
     * @param {number[]}
     */
    getMinChildIndex: function (i: number, data: number[]) {
        const leftIndex = this.getLeftIndex(i);
        const rightIndex = this.getRightIndex(i);
        return data[leftIndex] < data[rightIndex] ? leftIndex : rightIndex;
    },

    /**
     * @description: 
     * @param {number} 
     * @param {number[]}
     * @return: 
     */
    getMaxChildIndex: function (i: number, data: number[]) {
        const leftIndex = this.getLeftIndex(i);
        const rightIndex = this.getRightIndex(i);
        return data[leftIndex] > data[rightIndex] ? leftIndex : rightIndex;
    }
}
export default Heap;
