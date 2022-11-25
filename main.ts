radio.onReceivedNumber(function (receivedNumber) {
    start = input.runningTimeMicros()
    if (receivedNumber == 5) {
        k_Bit.run(DIR.RunForward, 50)
    } else if (receivedNumber == 1) {
        k_Bit.carStop()
    }
})
let elapsed = 0
let start = 0
start = 0
radio.setGroup(1)
basic.showIcon(IconNames.Ghost)
basic.forever(function () {
    if (start > 0) {
        elapsed = input.runningTimeMicros() - start
    }
    if (elapsed > 5000000) {
        k_Bit.carStop()
    }
})
