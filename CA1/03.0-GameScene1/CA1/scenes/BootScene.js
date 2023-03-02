class BootScene extends Phaser.Scene {
    constructor() {
        super('Boot');
    }

    preload() {
        console.log("preloading");
        // load images
        this.loadImages();
        // load spritesheets
        this.loadSpriteSheets();
        // load audio
        //this.loadAudio();
    }

    loadImages() {
        // load images
        this.load.image('orangeButton01', '/assets/orange_button01.jpg');
        this.load.image('orangeButton02', '/assets/orange_button02.png');
        this.load.image('tempSky', '/assets/TempSky.png');
        this.load.image('tempPlatform', '/assets/TempPlatform.png');
        this.load.image('tempPlatformVert', '/assets/TempPlatformVerticle.png');
        this.load.image('Platform', '/assets/CobbleStonePlatform.png');




    }

    loadSpriteSheets() {
        this.load.spritesheet('Dude', '/assets/DudeSpriteSheet.png', {
            frameWidth: 32,
            frameHeight: 32
        });
        this.load.spritesheet('Flame', '/assets/FlameSpriteSheet.png', {
            frameWidth: 32,
            frameHeight: 32
        });
    }

    loadAudio() {
        // Adding Sounds
        this.load.audio("", [".mp3", ".ogg"]); //two different types of sound file
    }

    create() {
        this.scene.start('Title');
        console.log("starting TitleScene");
    }
}
