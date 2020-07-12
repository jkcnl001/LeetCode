/**
 * @description: 父节点
 * @param {number} 
 * @return: 
 */
function parentNode(n: number) {
    return (n - 1) / 2;
}

/**
 * @description: 左孩子
 * @param {number} 
 * @return: 
 */
function leftNode(n: number) {
    return 2 * n + 1;
}

/**
 * @description: 右孩子
 * @param {number} 
 * @return: 
 */
function rightNode(n: number) {
    return 2 * n + 2;
}

/**
 * @description: 构建堆 
 * @param {number} 
 * * @param {number[]} 
 * @return: 
 */
function buildHeap(n: number, data: number[]) {
    for (let i = 1; i < n; i++) {
        let t: number = i;
        // 调整堆
        while (t != 0 && data[parentNode(t)] > data[t]) {
            let temp: number = data[t];
            data[t] = data[parentNode(t)];
            data[parentNode(t)] = temp;
            t = parentNode(t);
        }
    }
}

/**
 * @description: 调整堆 
 * @param {number} 
 * @param {number} 
 * @param {number[]} 
 * @return: 
 */
function adjust(i: number, n: number, data: number[]) {
    if (data[i] <= data[0]) {
        return;
    }
    // 置换堆顶
    let temp: number = data[i];
    data[i] = data[0];
    data[0] = temp;
    // 调整堆顶
    let t: number = 0;
    while ((leftNode(t) < n && data[t] > data[leftNode(t)])
        || (rightNode(t) < n && data[t] > data[rightNode(t)])) {
        if (rightNode(t) < n && data[rightNode(t)] < data[leftNode(t)]) {
            // 右孩子更小，置换右孩子
            temp = data[t];
            data[t] = data[rightNode(t)];
            data[rightNode(t)] = temp;
            t = rightNode(t);
        } else {
            // 否则置换左孩子
            temp = data[t];
            data[t] = data[leftNode(t)];
            data[leftNode(t)] = temp;
            t = leftNode(t);
        }
    }
}

export function findTopN(n: number, data: number[]) {
    buildHeap(n, data);
    for (let i = n; i < data.length; ++i) {
        adjust(i, n, data);
    }
}