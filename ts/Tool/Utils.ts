import Heap from "./Heap";
const Utils = {
    findTopN: function (n: number, data: number[]) {
        const minHeap = Heap.buildMinHeap(data.slice(0, n))
        for (let i = n; i < data.length; ++i) {
            if (data[i] > minHeap[0]) {
                minHeap[0] = data[i];
                Heap.down(0, minHeap)
            }
        }
        return minHeap;
    }
}
export default Utils;