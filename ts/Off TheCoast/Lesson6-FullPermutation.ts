export default [
    function <T>(arr: T[]): any[] {
        let result: any[] = []
        function isSwap(from: number, to: number): boolean {
            for (let i = from; i < to; i++) {
                if (arr[to] == arr[i]) {
                    return false
                }
            }
            return true
        }
        function permutation(index: number) {
            if (index == arr.length - 1) {
                console.log(arr)
                result.push(arr.concat())
                return
            }
            for (let i = index, length = arr.length; i < length; ++i) {
                if (!isSwap(index, i)) continue  //当arr 里面有重复元素时
                [arr[index], arr[i]] = [arr[i], arr[index]];
                permutation(index + 1);
                [arr[index], arr[i]] = [arr[i], arr[index]];
            }
        }
        permutation(0)
        return result
    },
    function () {
        function swap() {

        }
    }
]