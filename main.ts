let POS = 0
let X = 0
let Y = 0
let BON = 0
let RSTOP = 1
let RSTART = 0
let DELAY = 100
let STATE = 0
basic.forever(function () {
    if (BON == 1) {
        BON = 0
        music.playTone(880, music.beat(BeatFraction.Sixteenth))
    } else {
        basic.pause(1)
    }
})
basic.forever(function () {
    if (STATE == 0 && input.buttonIsPressed(Button.B)) {
        DELAY = 100
        STATE = 1
        RSTART = 1
        while (RSTOP == 1) {
            basic.pause(100)
        }
    } else if (STATE == 1 && !(input.buttonIsPressed(Button.B))) {
        for (let index = 0; index < 5; index++) {
            DELAY += 100
            basic.pause(1000)
        }
        RSTART = 0
        STATE = 2
    } else if (STATE == 2 && RSTOP == 1) {
        for (let index = 0; index < 4; index++) {
            basic.showNumber(POS)
            basic.pause(100)
            basic.clearScreen()
            basic.pause(100)
        }
        STATE = 0
    } else {
    	
    }
})
basic.forever(function () {
    for (let COUNT = 0; COUNT <= 15; COUNT++) {
        while (0 == RSTART) {
            RSTOP = 1
            basic.pause(10)
        }
        RSTOP = 0
        led.unplot(X, Y)
        if (COUNT < 4) {
            X = COUNT
            Y = 0
        } else if (COUNT < 8) {
            X = 4
            Y = COUNT - 4
        } else if (COUNT < 12) {
            X = 12 - COUNT
            Y = 4
        } else {
            X = 0
            Y = 16 - COUNT
        }
        led.plot(X, Y)
        POS = COUNT
        if (BON == 0) {
            BON = 1
        }
        basic.pause(DELAY)
    }
})
