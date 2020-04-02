
class Param {
    num: number = 0;
    from: string = ''
    pass: string = ''
    to: string = ''
    constructor(num: number, from: string = "A", pass: string = "B", to: string = "C") {
        [this.num, this.from, this.pass, this.to] = [num, from, pass, to]
    }
}
export default [
    function hanoi(num: number, from: string = "A", pass: string = "B", to: string = 'C') {
        let param_outer = new Param(num, from, pass, to)
        let arr = []
        while (!(param_outer.num == 0 && arr.length == 0)) {
            let param_inner: Param = Object.assign({}, param_outer)
            while (param_inner.num > 0) {
                arr.push(Object.assign({}, param_inner))
                --param_inner.num;
                [param_inner.pass, param_inner.to] = [param_inner.to, param_inner.pass]
            }
            param_outer = arr.pop() as Param
            console.log(`${param_outer.num} : ${param_outer.from}  :  ${param_outer.to}`)
            --param_outer.num;
            [param_outer.from, param_outer.pass] = [param_outer.pass, param_outer.from]
        }
    },
    function (num: number, from: string = "A", pass: string = "B", to: string = 'C') {
        function hanio(num: number, from: string = "A", pass: string = "B", to: string = 'C') {
            if (num == 0) {
                return
            }
            hanio(num - 1, from, to, pass)
            console.log(`${num} : ${from}:${to}`)
            hanio(num - 1, pass, from, to)
        }
        hanio(num, from, pass, to)
    }
]