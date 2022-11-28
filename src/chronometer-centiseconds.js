class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = null
  }

  start(printTimeCallback) {
    const intervalId = setInterval(() => {
      this.currentTime += 1
      if(typeof printTimeCallback === 'function'){
        printTimeCallback()
      }
    }, 10)
    this.intervalId = intervalId
  }

  getMinutes() {
    return  Math.floor( this.currentTime / 6000)
  }

  getSeconds() {
    return Math.floor(((this.currentTime - this.getMinutes() * 6000) / 100))
  }

  getCentiseconds() {
    return Math.floor (this.currentTime - (this.getMinutes() * 6000) - (this.getSeconds() * 100))   
  }

  computeTwoDigitNumber(value) {
    if (value < 10) return `0${value}`
    return String(value)
  }

  stop() {
    clearInterval(this.intervalId)
  }

  reset() {
    this.currentTime = 0
  }

  split() {
    let minutes = this.computeTwoDigitNumber(this.getMinutes())
    let seconds = this.computeTwoDigitNumber(this.getSeconds())
    let centiseconds = this.computeTwoDigitNumber(this.getCentiseconds())

    return `${minutes}:${seconds}.${centiseconds}`
  }
}

