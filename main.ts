serial.redirectToUSB()
basic.forever(function () {
    serial.writeValue("Light", input.lightLevel())
    serial.writeValue("Sound", input.soundLevel())
})
