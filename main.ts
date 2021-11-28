let Compteur = 0
let Demarré = 0
let Duree = 0
input.onButtonPressed(Button.A, function () {
    Compteur = randint(3, 10)
    Demarré = 0
    Duree = 0
    basic.clearScreen()
    while (Compteur >= 0) {
        basic.showNumber(Compteur)
        Compteur += -1
        basic.pause(1000)
    }
    Demarré = 1
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
})
basic.forever(function () {
    if (Demarré == 1) {
        if (input.pinIsPressed(TouchPin.P0)) {
            basic.showArrow(ArrowNames.West)
            Demarré = 0
            basic.pause(1000)
            basic.showNumber(Duree)
        } else if (input.pinIsPressed(TouchPin.P2)) {
            basic.showArrow(ArrowNames.East)
            Demarré = 0
            basic.pause(1000)
            basic.showNumber(Duree)
        } else {
            Duree += 1
        }
    }
})
