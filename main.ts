basic.forever(function () {
    if (input.compassHeading() > 315 && input.compassHeading() <= 360 || input.compassHeading() > 0 && input.compassHeading() <= 45) {
        basic.showString("N")
    } else {
        basic.showString("-")
    }
})
