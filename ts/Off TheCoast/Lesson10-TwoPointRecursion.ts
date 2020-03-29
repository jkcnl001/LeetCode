export default [
    function (arr: number[]): number {
        function sum(start: number, end: number): number {
            if (start == end) return arr[start]
            let mid = (start + end) >> 1
            return sum(start, mid) + sum(mid + 1, end)
        }
        return sum(0, arr.length - 1)
    }
]