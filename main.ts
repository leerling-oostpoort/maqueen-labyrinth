let speedright = 0
let speedleft = 0
let strip = neopixel.create(DigitalPin.P15, 4, NeoPixelMode.RGB)
let hue = 0
basic.forever(function () {
    strip.setPixelColor(0, neopixel.hsl(hue, 125, 50))
    strip.setPixelColor(1, neopixel.hsl(hue, 125, 50))
    strip.setPixelColor(2, neopixel.hsl(hue, 125, 50))
    strip.setPixelColor(3, neopixel.hsl(hue, 125, 50))
    strip.show()
    hue += 1
})
basic.forever(function () {
    basic.pause(200)
    speedleft = randint(-50, 50)
    speedright = randint(-50, 50)
    if (speedleft > 0) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, speedleft)
    } else {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, Math.abs(speedleft))
        if (speedright > 0) {
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, speedright)
        } else {
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, Math.abs(speedright))
        }
    }
})
