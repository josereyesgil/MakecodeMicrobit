basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        music.playMelody("C C D C F E - - ", 100)
    } else {
        if (input.buttonIsPressed(Button.B)) {
            basic.showString("SOMOS LA MEJOR FAMILIA!")
        } else {
            if (input.buttonIsPressed(Button.AB)) {
                music.startMelody(music.builtInMelody(Melodies.Wedding), MelodyOptions.Once)
            } else {
                basic.showIcon(IconNames.Heart)
                basic.pause(100)
                basic.showLeds(`
                    . . . . .
                    . . . . .
                    . . . . .
                    . . . . .
                    . . . . .
                    `)
                basic.pause(100)
                basic.showIcon(IconNames.Happy)
                basic.pause(100)
                basic.showLeds(`
                    . . . . .
                    . . . . .
                    . . . . .
                    . . . . .
                    . . . . .
                    `)
            }
        }
    }
})
