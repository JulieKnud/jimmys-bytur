controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.vy = -150
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    Øl1 = sprites.create(Øl[0], SpriteKind.Projectile)
    Øl1.setPosition(mySprite.x, mySprite.y)
    Øl1.setVelocity(0, -150)
    animation2 = true
})
info.onScore(100, function () {
    game.gameOver(true)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    tiles.placeOnTile(mySprite, tiles.getTileLocation(3, 14))
    info.changeLifeBy(-1)
})
info.onLifeZero(function () {
    game.gameOver(false)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    sprites.destroy(mySprite2)
    info.changeScoreBy(1)
})
scene.onHitWall(SpriteKind.Projectile, function (sprite, location) {
    sprites.destroy(Øl1)
})
function Skift_billede () {
    if (Øl1.image == Øl[0]) {
        Øl1.setImage(Øl[1])
    } else {
        Øl1.setImage(Øl[0])
    }
}
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(sprite)
    sprites.destroy(otherSprite, effects.fire, 100)
    info.changeScoreBy(1)
})
let Øl1: Sprite = null
let animation2 = false
let Øl: Image[] = []
let mySprite2: Sprite = null
let mySprite: Sprite = null
scene.setBackgroundColor(8)
tiles.setCurrentTilemap(tilemap`level2`)
info.setLife(3)
mySprite = sprites.create(img`
    ........................
    ........................
    ........................
    ........................
    ........................
    ........................
    ...........f............
    ..........fff...........
    .........fffff..........
    .........fffff..........
    ..........fff...........
    ...........f............
    ..........fff...........
    .........f.f.f..........
    ........f..f..f.........
    ...........f............
    ...........f............
    ..........fff...........
    .........f...f..........
    ........f.....f.........
    ........................
    ........................
    ........................
    ........................
    `, SpriteKind.Player)
let ex_k = sprites.create(img`
    . . . . . f f 4 4 f f . . . . . 
    . . . . f 5 4 5 5 4 5 f . . . . 
    . . . f e 4 5 5 5 5 4 e f . . . 
    . . f b 3 e 4 4 4 4 e 3 b f . . 
    . . f 3 3 3 3 3 3 3 3 3 3 f . . 
    . f 3 3 e b 3 e e 3 b e 3 3 f . 
    . f 3 3 f f e e e e f f 3 3 f . 
    . f b b f b f e e f b f b b f . 
    . f b b e 1 f 4 4 f 1 e b b f . 
    f f b b f 4 4 4 4 4 4 f b b f f 
    f b b f f f e e e e f f f b b f 
    . f e e f b d d d d b f e e f . 
    . . e 4 c d d d d d d c 4 e . . 
    . . e f b d b d b d b b f e . . 
    . . . f f 1 d 1 d 1 d f f . . . 
    . . . . . f f b b f f . . . . . 
    `, SpriteKind.Enemy)
mySprite2 = sprites.create(img`
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    .....7977777777.....
    .....7777777777.....
    ......66666666......
    ......77777777......
    .....7797777777.....
    .....7977777777.....
    .....7977777777.....
    .....7777777777.....
    .....7777777777.....
    .....7777777776.....
    .....7777777776.....
    ......76666666......
    ....................
    ....................
    `, SpriteKind.Food)
controller.moveSprite(mySprite, 100, 0)
Øl = [img`
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    .....7977777777.....
    .....7777777777.....
    ......66666666......
    ......77777777......
    .....7797777777.....
    .....7977777777.....
    .....7977777777.....
    .....7777777777.....
    .....7777777777.....
    .....7777777776.....
    .....7777777776.....
    ......76666666......
    ....................
    ....................
    `, img`
    ....................
    ....................
    ......76666666......
    .....7777777776.....
    .....7777777776.....
    .....7777777777.....
    .....7777777777.....
    .....9999999999.....
    .....9999999999.....
    .....9999999999.....
    ......99999999......
    ......66666666......
    .....7777777777.....
    .....7977777777.....
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    `]
animation2 = false
tiles.placeOnTile(mySprite, tiles.getTileLocation(3, 14))
scene.cameraFollowSprite(mySprite)
mySprite.ay = 350
game.onUpdateInterval(2000, function () {
    ex_k = sprites.create(img`
        . . . . . f f 4 4 f f . . . . . 
        . . . . f 5 4 5 5 4 5 f . . . . 
        . . . f e 4 5 5 5 5 4 e f . . . 
        . . f b 3 e 4 4 4 4 e 3 b f . . 
        . . f 3 3 3 3 3 3 3 3 3 3 f . . 
        . f 3 3 e b 3 e e 3 b e 3 3 f . 
        . f 3 3 f f e e e e f f 3 3 f . 
        . f b b f b f e e f b f b b f . 
        . f b b e 1 f 4 4 f 1 e b b f . 
        f f b b f 4 4 4 4 4 4 f b b f f 
        f b b f f f e e e e f f f b b f 
        . f e e f b d d d d b f e e f . 
        . . e 4 c d d d d d d c 4 e . . 
        . . e f b d b d b d b b f e . . 
        . . . f f 1 d 1 d 1 d f f . . . 
        . . . . . f f b b f f . . . . . 
        `, SpriteKind.Enemy)
    ex_k.setPosition(randint(0, scene.screenWidth()), scene.screenHeight())
    ex_k.setVelocity(0, 56)
    ex_k.setFlag(SpriteFlag.DestroyOnWall, true)
})
game.onUpdateInterval(1000, function () {
    mySprite2 = sprites.create(img`
        ....................
        ....................
        ....................
        ....................
        ....................
        ....................
        .....7977777777.....
        .....7777777777.....
        ......66666666......
        ......77777777......
        .....7797777777.....
        .....7977777777.....
        .....7977777777.....
        .....7777777777.....
        .....7777777777.....
        .....7777777776.....
        .....7777777776.....
        ......76666666......
        ....................
        ....................
        `, SpriteKind.Food)
    mySprite2.setPosition(randint(0, scene.screenWidth()), scene.screenHeight())
    mySprite2.setVelocity(0, 56)
    mySprite2.setFlag(SpriteFlag.DestroyOnWall, true)
})
game.onUpdateInterval(100, function () {
    if (animation2 == true) {
        Skift_billede()
    }
})
