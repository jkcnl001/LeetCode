module.exports = class Tool {
    mStartTime: number = 0
    mTimeArr: number[] = []
    constructor() {
        this.mStartTime = new Date().getTime()
        this.mTimeArr.push(this.mStartTime)
    }
    getTimeCallDlt(tag: string = '') {
        let time = new Date().getTime()
        console.log(`${tag}${time - this.mTimeArr[this.mTimeArr.length - 1]}`)
        this.mTimeArr.push(time)
    }
}
