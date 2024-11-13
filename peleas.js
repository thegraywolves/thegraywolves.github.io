const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 400,
    backgroundColor: '#222',
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 1000 },
            debug: false
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

const game = new Phaser.Game(config);

let player1, player2;
let cursors, keys;
let player1Health = 100;
let player2Health = 100;
let player1HealthBar, player2HealthBar;

function preload() {
    // Cargar fondo
    this.load.image('background', 'ruta_al_fondo_del_escenario.png');
    
    // Cargar sprites de los jugadores
    this.load.spritesheet('player1', 'ruta_al_sprite_del_personaje1.png', { frameWidth: 64, frameHeight: 64 });
    this.load.spritesheet('player2', 'ruta_al_sprite_del_personaje2.png', { frameWidth: 64, frameHeight: 64 });
}

function create() {
    // Fondo
    this.add.image(400, 200, 'background');

    // Barra de salud
    player1HealthBar = this.add.rectangle(150, 50, player1Health * 2, 20, 0x00ff00);
    player2HealthBar = this.add.rectangle(650, 50, player2Health * 2, 20, 0x00ff00);

    // Crear los jugadores
    player1 = this.physics.add.sprite(100, 300, 'player1').setCollideWorldBounds(true);
    player2 = this.physics.add.sprite(700, 300, 'player2').setCollideWorldBounds(true);

    // Configurar controles
    cursors = this.input.keyboard.createCursorKeys();
    keys = this.input.keyboard.addKeys({
        a: Phaser.Input.Keyboard.KeyCodes.A,
        d: Phaser.Input.Keyboard.KeyCodes.D,
        w: Phaser.Input.Keyboard.KeyCodes.W,
        space: Phaser.Input.Keyboard.KeyCodes.SPACE,
        j: Phaser.Input.Keyboard.KeyCodes.J // Ataque de Player 1
    });

    // Animaciones para los jugadores
    this.anims.create({
        key: 'player1Idle',
        frames: this.anims.generateFrameNumbers('player1', { start: 0, end: 3 }),
        frameRate: 5,
        repeat: -1
    });
    this.anims.create({
        key: 'player1Punch',
        frames: this.anims.generateFrameNumbers('player1', { start: 4, end: 7 }),
        frameRate: 10,
        repeat: 0
    });
    this.anims.create({
        key: 'player2Idle',
        frames: this.anims.generateFrameNumbers('player2', { start: 0, end: 3 }),
        frameRate: 5,
        repeat: -1
    });
    this.anims.create({
        key: 'player2Punch',
        frames: this.anims.generateFrameNumbers('player2', { start: 4, end: 7 }),
        frameRate: 10,
        repeat: 0
    });

    // Configuración inicial
    player1.play('player1Idle');
    player2.play('player2Idle');
}

function update() {
    // Movimiento player1
    if (keys.a.isDown) {
        player1.setVelocityX(-200);
    } else if (keys.d.isDown) {
        player1.setVelocityX(200);
    } else {
        player1.setVelocityX(0);
    }

    if (keys.w.isDown && player1.body.onFloor()) {
        player1.setVelocityY(-600);
    }

    // Movimiento player2
    if (cursors.left.isDown) {
        player2.setVelocityX(-200);
    } else if (cursors.right.isDown) {
        player2.setVelocityX(200);
    } else {
        player2.setVelocityX(0);
    }

    if (cursors.up.isDown && player2.body.onFloor()) {
        player2.setVelocityY(-600);
    }

    // Ataque player1
    if (Phaser.Input.Keyboard.JustDown(keys.space)) {
        player1.play('player1Punch');
        if (Phaser.Geom.Intersects.RectangleToRectangle(player1.getBounds(), player2.getBounds())) {
            player2Health -= 10;
            player2HealthBar.width = player2Health * 2;
            if (player2Health <= 0) {
                alert("¡Player 1 gana!");
                resetGame();
            }
        }
    }

    // Ataque player2
    if (Phaser.Input.Keyboard.JustDown(cursors.down)) {
        player2.play('player2Punch');
        if (Phaser.Geom.Intersects.RectangleToRectangle(player2.getBounds(), player1.getBounds())) {
            player1Health -= 10;
            player1HealthBar.width = player1Health * 2;
            if (player1Health <= 0) {
                alert("¡Player 2 gana!");
                resetGame();
            }
        }
    }
}

function resetGame() {
    player1Health = 100;
    player2Health = 100;
    player1HealthBar.width = player1Health * 2;
    player2HealthBar.width = player2Health * 2;
    player1.setPosition(100, 300);
    player2.setPosition(700, 300);
    player1.play('player1Idle');
    player2.play('player2Idle');
}
