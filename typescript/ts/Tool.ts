export class Tool {
    mStartTime: number = 0
    mLastTime: number = 0
    constructor() {
        this.mStartTime = new Date().getTime()
        this.mLastTime = this.mStartTime
    }
    getTimeCallDlt(tag: string = '') {
        let time = new Date().getTime()
        console.log(`${tag} : ${time - this.mLastTime}`)
        this.mLastTime = time
    }
}