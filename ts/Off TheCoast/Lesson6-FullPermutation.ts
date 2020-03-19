export default [
    function <T>(arr: T[]): any[] {
        let result: any[] = []
        function permutation(index: number) {
            if (index == arr.length - 1) {
                console.log(arr)
                result.push(arr.concat())
                return
            }
            for (let i = index, length = arr.length; i < length; ++i) {
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