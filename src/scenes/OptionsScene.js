/* eslint-disable comma-dangle */
import Phaser from 'phaser';
import Button from '../Objects/Button';

export default class OptionsScene extends Phaser.Scene {
  constructor() {
    super('Options');
  }

  create() {
    this.fontFamily = 'Arcadepix'
    this.model = this.sys.game.globals.model;

    this.text = this.add.text(300, 100, 'Options', { fontSize: 40, fontFamily: this.fontFamily });
    this.musicButton = this.add.image(200, 200, 'checkedBox');
    this.musicText = this.add.text(250, 190, 'Music Enabled', { fontSize: 24, fontFamily: this.fontFamily });

    this.soundButton = this.add.image(200, 300, 'checkedBox');
    this.soundText = this.add.text(250, 290, 'Sound Enabled', { fontSize: 24, fontFamily: this.fontFamily });

    this.musicButton.setInteractive();
    this.soundButton.setInteractive();

    this.musicButton.on('pointerdown', () => {
      this.model.musicOn = !this.model.musicOn;
      this.updateAudio();
    });

    this.soundButton.on(
      'pointerdown',
      () => {
        this.model.soundOn = !this.model.soundOn;
        this.updateAudio();
      }
    );

    this.menuButton = new Button(
      this,
      400,
      500,
      'blueButton1',
      'blueButton2',
      'Menu',
      'Main'
    );

    this.updateAudio();
  }

  updateAudio() {
    if (!this.model.musicOn) {
      this.musicButton.setTexture('box');
      this.sys.game.globals.bgMusic.stop();
      this.model.bgMusicPlaying = false;
    } else {
      this.musicButton.setTexture('checkedBox');
      if (!this.model.bgMusicPlaying) {
        this.sys.game.globals.bgMusic.play();
        this.model.bgMusicPlaying = true;
      }
    }

    if (!this.model.soundOn) {
      this.soundButton.setTexture('box');
      this.model.soundOn = false;
    } else {
      this.soundButton.setTexture('checkedBox');
      this.model.soundOn = true;
    }
  }
}
