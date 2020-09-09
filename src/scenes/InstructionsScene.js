/* eslint-disable comma-dangle */
import Phaser from 'phaser';
import Button from '../Objects/Button';

export default class OptionsScene extends Phaser.Scene {
  constructor() {
    super('Instructions');
  }

  create() {
    this.fontFamily = 'Arcadepix';
    this.text = this.add.text(300, 100, 'Instructions', { fontSize: 35, fontFamily: this.fontFamily });
    const displayText = 'Up: ⬆\nDown: ⬇\nLeft: ⬅\nRight: ➡\nShoot: SPACE BAR ';
    this.text = this.add.text(300, 200, displayText, { fontSize: 25, fontFamily: this.fontFamily });
    this.gameButton = new Button(
      this,
      400,
      400,
      'blueButton1',
      'blueButton2',
      'Play',
      'Game'
    );

    this.mainButton = new Button(
      this,
      400,
      500,
      'blueButton1',
      'blueButton2',
      'Exit',
      'Main'
    );
  }
}