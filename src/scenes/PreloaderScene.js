/* eslint-disable comma-dangle */
import Phaser from 'phaser';

export default class PreloaderScene extends Phaser.Scene {
  constructor() {
    super('Preloader');
  }

  init() {
    this.readyCount = 0;
  }

  initLoadingSprite() {
    this.fontFamily = 'Arcadepix';
    const progressBar = this.add.graphics();
    const progressBox = this.add.graphics();
    progressBox.fillStyle(0x222222, 0.8);
    progressBox.fillRect(240, 270, 320, 50);

    const { width, height } = this.cameras.main;
    const loadingText = this.make.text({
      x: width / 2,
      y: height / 2 - 50,
      text: 'Loading...',
      style: {
        font: `20px ${this.fontFamily}`,
        fill: '#ffffff',
      },
    });
    loadingText.setOrigin(0.5, 0.5);

    const percentText = this.make.text({
      x: width / 2,
      y: height / 2 - 5,
      text: '0%',
      style: {
        font: `18px ${this.fontFamily}`,
        fill: '#ffffff',
      },
    });
    percentText.setOrigin(0.5, 0.5);

    const assetText = this.make.text({
      x: width / 2,
      y: height / 2 + 50,
      text: '',
      style: {
        font: `18px ${this.fontFamily}`,
        fill: '#ffffff',
      },
    });
    assetText.setOrigin(0.5, 0.5);
    this.load.on('progress', (value) => {
      percentText.setText(`${(+value * 100).toFixed(2)} %`);
      progressBar.clear();
      progressBar.fillStyle(0xffffff, 1);
      progressBar.fillRect(250, 280, 300 * value, 30);
    });

    this.load.on('fileprogress', (file) => {
      assetText.setText(`Loading asset:  ${file.key}`);
    });

    this.load.on(
      'complete',
      () => {
        progressBar.destroy();
        progressBox.destroy();
        loadingText.destroy();
        percentText.destroy();
        assetText.destroy();
        this.ready();
      }
    );

    this.timedEvent = this.time.delayedCall(3000, this.ready, [], this);
  }

  preload() {
    this.add.image(400, 200, 'logo');
    this.initLoadingSprite();

    this.load.image('blueButton1', 'src/assets/ui/blue_button02.png');
    this.load.image('blueButton2', 'src/assets/ui/blue_button03.png');
    this.load.image('phaserLogo', 'src/content/logo-war-prime.png');
    this.load.image('box', 'src/assets/ui/grey_box.png');
    this.load.image('checkedBox', 'src/assets/ui/blue_boxCheckmark.png');
    this.load.audio('bgMusic', ['src/content/EpicWar.mp3']);
    this.load.spritesheet('sprExplosion', 'src/content/sprExplosion.png', {
      frameWidth: 32,
      frameHeight: 32,
    });
    this.load.spritesheet('sprEnemy0', 'src/content/sprEnemy0.png', {
      frameWidth: 16,
      frameHeight: 16,
    });
    this.load.image('sprEnemy1', 'src/content/sprEnemy1.png');
    this.load.spritesheet('sprEnemy2', 'src/content/sprEnemy2.png', {
      frameWidth: 16,
      frameHeight: 16,
    });
    this.load.image('sprLaserEnemy0', 'src/content/sprLaserEnemy0.png');
    this.load.image('sprLaserPlayer', 'src/content/sprLaserPlayer.png');
    this.load.spritesheet('sprPlayer', 'src/content/player.png', {
      frameWidth: 50,
      frameHeight: 50,
    });


    this.load.audio('sndExplode0', 'src/content/sndExplode0.wav');
    this.load.audio('sndExplode1', 'src/content/sndExplode1.wav');
    this.load.audio('sndLaser', 'src/content/sndLaser.wav');

    this.load.image('sprBg0', 'src/content/background-space.png');
    this.load.image('sprBg1', 'src/content/background-space.png');
    this.load.image('sprBtnPlay', 'src/content/sprBtnPlay.png');
    this.load.image('sprBtnPlayHover', 'src/content/sprBtnPlayHover.png');
    this.load.image('sprBtnPlayDown', 'src/content/sprBtnPlayDown.png');
    this.load.image('sprBtnRestart', 'src/content/sprBtnRestart.png');
    this.load.image('sprBtnRestartHover', 'src/content/sprBtnRestartHover.png');
    this.load.image('sprBtnRestartDown', 'src/content/sprBtnRestartDown.png');
    this.load.audio('sndBtnOver', 'src/content/sndBtnOver.wav');
    this.load.audio('sndBtnDown', 'src/content/sndBtnDown.wav');
    this.load.html('my_form', 'src/content/text/my_form.html');
  }

  ready() {
    this.scene.start('Main');
  }
}
