input.onButtonPressed(Button.A, function () {
    if (Pins == 0) {
        Pins += 1
    }
    if (Pins == 3) {
        sprite.change(LedSpriteProperty.Y, -1)
        basic.pause(100)
        sprite.change(LedSpriteProperty.Y, -1)
        basic.pause(500)
        sprite.change(LedSpriteProperty.Y, 1)
        basic.pause(100)
        sprite.change(LedSpriteProperty.Y, 1)
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
        sprite2 = game.createSprite(4, 3)
        gamestart += 1
    }
})
let value = 0
let points = 0
let gamestart = 0
let sprite2: game.LedSprite = null
let sprite1: game.LedSprite = null
let sprite: game.LedSprite = null
let Pins = 0
Pins = 0
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
basic.forever(function () {
    if (gamestart == 1) {
        for (let index = 0; index < 5; index++) {
            basic.pause(200)
            sprite1.change(LedSpriteProperty.X, -1)
            sprite2.change(LedSpriteProperty.X, -1)
        }
        points += 1
        sprite1.delete()
        sprite2.delete()
        value = randint(1, 3)
        if (value == 1) {
            sprite2 = game.createSprite(4, 4)
            sprite1 = game.createSprite(4, 3)
        }
        if (value == 2) {
            sprite1 = game.createSprite(4, 4)
        }
        if (value == 3) {
            sprite1 = game.createSprite(4, 3)
        }
    }
})
