input.onButtonPressed(Button.A, function () {
    if (Pins == 0) {
        Pins += 1
    }
    if (Pins == 3) {
        sprite.change(LedSpriteProperty.Y, -1)
        basic.pause(100)
        sprite.change(LedSpriteProperty.Y, -1)
        basic.pause(500)
        sprite.change(LedSpriteProperty.Y, 2)
    }
})
input.onButtonPressed(Button.AB, function () {
    if (Pins == 2) {
        Pins += 1
        if (Pins == 3) {
        	
        }
    }
})
input.onButtonPressed(Button.B, function () {
    if (Pins == 1) {
        Pins += 1
    }
    if (Pins == 3) {
    	
    }
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    if (Pins == 3) {
        sprite = game.createSprite(0, 4)
        sprite1 = game.createSprite(4, 4)
        gamestart += 1
    }
})
let points = 0
let gamestart = 0
let sprite1: game.LedSprite = null
let sprite: game.LedSprite = null
let Pins = 0
Pins = 0
basic.forever(function () {
    if (gamestart == 1) {
        for (let index = 0; index < 5; index++) {
            basic.pause(200)
            sprite1.change(LedSpriteProperty.X, -1)
        }
        points += 1
        sprite1.delete()
        sprite1 = game.createSprite(4, 4)
    }
})
basic.forever(function () {
    if (gamestart == 1) {
        if (sprite.isTouching(sprite1)) {
            basic.showString("" + (points))
            gamestart = 3
        }
    }
})
basic.forever(function () {
    if (gamestart == 3) {
        game.gameOver()
    }
})
basic.forever(function () {
    music.playMelody("F E F D D C E F ", 120)
    music.playMelody("F E F C D E F D ", 120)
})
