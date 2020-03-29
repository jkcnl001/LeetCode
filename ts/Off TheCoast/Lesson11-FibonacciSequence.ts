export default [
    function (num: number): number {
        function fibonacciSequence(num: number): number {
            if (num < 1) {
                return 0
            } else if (num == 1 || num == 2) {
                return 1
            }
            let val = fibonacciSequence(num - 1) + fibonacciSequence(num - 2)
            return val
        }
        return fibonacciSequence(num)
    },
    function (num: number): number {
        function fibonacciSequence(num: number): number {
            let f = 0
            let g = 1
            while (0 < --num) {
                g = g + f
                f = g - f
            }
            return g
        }
        return fibonacciSequence(num)
    }
]