export default [
    function (arr: number[], sum: number) {
        let value: number[] = []
        function enumNumber(index: number, has: number) {
            if (index >= arr.length) {
                return
            }
            value.push(arr[index])
            if (has + arr[index] === sum) {
                console.log(value)
            }
            enumNumber(index + 1, has + arr[index])
            value.pop()
            enumNumber(index + 1, has)
        }
        enumNumber(0, 0)
    }
]