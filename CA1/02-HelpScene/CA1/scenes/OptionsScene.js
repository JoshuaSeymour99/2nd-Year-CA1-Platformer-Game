class OptionsScene extends Phaser.Scene {
    constructor() {
        super('Options');
    }
    init() {
        console.log("OptionsScene");
        this.scaleW = this.sys.game.config.width;
        this.scaleH = this.sys.game.config.height;
    }

    create() {
        // create title text
        this.titleText = this.add.text(this.scaleW / 2, this.scaleH * .45, 'Joshua/Ben Options', {
            fontSize: '64px',
            fill: '#fff'
        });

        this.titleText.setOrigin(0.5);

        // Creating the button to mute sound effects
        this.startPlayButton = new UiButton(this, this.scaleW * .3, this.scaleH * 0.75, 'orangeButton01', 'orangeButton02', 'Mute SFX', this.startScene.bind(this, ''));
        // create the help/controls button
        this.startHelpButton = new UiButton(this, this.scaleW * .7, this.scaleH * 0.75, 'orangeButton01', 'orangeButton02', 'Mute Background music', this.startScene.bind(this, ''));
        //button to get back to main menu
        this.startTitleButton = new UiButton(this, this.scaleW * .2, this.scaleH * 0.1, 'orangeButton01', 'orangeButton02', 'Back', this.startScene.bind(this, 'Title'));

    }
    startScene(targetScene) {
        this.scene.start(targetScene);
    }
}
