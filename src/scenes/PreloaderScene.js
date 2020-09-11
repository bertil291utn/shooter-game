/* eslint-disable comma-dangle */
import Phaser from 'phaser';
import blueButton1 from '../content/images/blue_button02.png';
import blueButton2 from '../content/images/blue_button03.png';
import phaserLogo from '../content/images/logo-war-prime.png';
import box from '../content/images/grey_box.png';
import checkedBox from '../content/images/blue_boxCheckmark.png';
import sprExplosion from '../content/images/sprExplosion.png';
import sprEnemy0 from '../content/images/sprEnemy0.png';
import sprEnemy1 from '../content/images/sprEnemy1.png';
import sprEnemy2 from '../content/images/sprEnemy2.png';
import sprLaserEnemy0 from '../content/images/sprLaserEnemy0.png';
import sprLaserPlayer from '../content/images/sprLaserPlayer.png';
import sprPlayer from '../content/images/player.png';
import sprBg0 from '../content/images/background-space.png';
import sprBtnPlay from '../content/images/sprBtnPlay.png';
import sprBtnPlayHover from '../content/images/sprBtnPlayHover.png';
import sprBtnPlayDown from '../content/images/sprBtnPlayDown.png';
import sprBtnRestart from '../content/images/sprBtnRestart.png';
import sprBtnRestartHover from '../content/images/sprBtnRestartHover.png';
import sprBtnRestartDown from '../content/images/sprBtnRestartDown.png';
import bgMusic from '../content/sounds/EpicWar.mp3';
import sndExplode0 from '../content/sounds/sndExplode0.wav';
import sndExplode1 from '../content/sounds/sndExplode1.wav';
import sndLaser from '../content/sounds/sndLaser.wav';
import sndBtnOver from '../content/sounds/sndBtnOver.wav';
import sndBtnDown from '../content/sounds/sndBtnDown.wav';
import myForm from '../content/text/my_form.html';

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

    this.load.image('blueButton1', blueButton1);
    this.load.image('blueButton2', blueButton2);
    this.load.image('phaserLogo', phaserLogo);
    this.load.image('box', box);
    this.load.image('checkedBox', checkedBox);
    this.load.audio('bgMusic', [bgMusic]);
    this.load.spritesheet('sprExplosion', sprExplosion, {
      frameWidth: 32,
      frameHeight: 32,
    });
    this.load.spritesheet('sprEnemy0', sprEnemy0, {
      frameWidth: 16,
      frameHeight: 16,
    });
    this.load.image('sprEnemy1', sprEnemy1);
    this.load.spritesheet('sprEnemy2', sprEnemy2, {
      frameWidth: 16,
      frameHeight: 16,
    });
    this.load.image('sprLaserEnemy0', sprLaserEnemy0);
    this.load.image('sprLaserPlayer', sprLaserPlayer);
    this.load.spritesheet('sprPlayer', sprPlayer, {
      frameWidth: 50,
      frameHeight: 50,
    });


    this.load.audio('sndExplode0', sndExplode0);
    this.load.audio('sndExplode1', sndExplode1);
    this.load.audio('sndLaser', sndLaser);

    this.load.image('sprBg0', sprBg0);
    this.load.image('sprBg1', sprBg0);
    this.load.image('sprBtnPlay', sprBtnPlay);
    this.load.image('sprBtnPlayHover', sprBtnPlayHover);
    this.load.image('sprBtnPlayDown', sprBtnPlayDown);
    this.load.image('sprBtnRestart', sprBtnRestart);
    this.load.image('sprBtnRestartHover', sprBtnRestartHover);
    this.load.image('sprBtnRestartDown', sprBtnRestartDown);
    this.load.audio('sndBtnOver', sndBtnOver);
    this.load.audio('sndBtnDown', sndBtnDown);
    // const s = '<div id="myDiv"></div>';
    const htmlObject = document.createElement('html');
    htmlObject.innerHTML = myForm;
    this.load.html('my_form', htmlObject);
    console.log(htmlObject);

  }

  ready() {
    this.scene.start('Main');
  }
}
