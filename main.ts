input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Heart)
})
serial.redirectToUSB()
basic.forever(function () {
    serial.writeValue("Light", input.lightLevel())
    serial.writeValue("Sound", input.soundLevel())
})
