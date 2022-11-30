radio.onReceivedNumber(function (receivedNumber) {
    start = input.runningTimeMicros()
    if (receivedNumber == 5) {
        k_Bit.LED_brightness(210)
        k_Bit.Led(COLOR.red)
        basic.showIcon(IconNames.Ghost)
        k_Bit.run(DIR.RunForward, 50)
    } else if (receivedNumber == 1) {
        k_Bit.carStop()
    }
})
let elapsed = 0
let start = 0
k_Bit.OFFLed()
basic.clearScreen()
start = 0
radio.setGroup(1)
basic.forever(function () {
    if (start > 0) {
        elapsed = input.runningTimeMicros() - start
    }
    if (elapsed > 5000000) {
        k_Bit.carStop()
    }
})
