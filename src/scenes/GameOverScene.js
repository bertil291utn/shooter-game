/* eslint-disable comma-dangle */
import Phaser from 'phaser';
import Button from '../Objects/Button';

export default class GameOverScene extends Phaser.Scene {
  constructor() {
    super('GameOver');
  }

  create() {
    this.add.image(400, 300, 'sprBg0');
    this.title = this.add.text(this.game.config.width * 0.5, 128, 'GAME OVER', {
      fontFamily: 'Arcadepix',
      fontSize: 48,
      fontStyle: 'bold',
      color: '#ffffff',
      align: 'center',
    });
    this.title.setOrigin(0.5);


    this.resetButton = new Button(
      this,
      400,
      300,
      'blueButton1',
      'blueButton2',
      'Reset',
      'Game'
    );

    this.mainButton = new Button(
      this,
      400,
      400,
      'blueButton1',
      'blueButton2',
      'Menu',
      'Main'
    );
  }
}
