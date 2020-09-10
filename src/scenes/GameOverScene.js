/* eslint-disable comma-dangle */
import Phaser from 'phaser';
import Button from '../Objects/Button';
import localStorageMethod from '../localStorage';
import API from '../api';

export default class GameOverScene extends Phaser.Scene {
  constructor() {
    super('GameOver');
  }

  async create() {
    this.playerModel = this.sys.game.globals.playerModel;
    const key = this.sys.game.globals.localStorage;
    localStorageMethod.setPlayer(key, this.playerModel);
    // save to api and reset score
    if (this.playerModel.score !== 0) await API.setPlayer(this.playerModel);
    this.add.image(400, 300, 'sprBg0');
    this.title = this.add.text(this.game.config.width * 0.5, 128, 'GAME OVER', {
      fontFamily: 'Arcadepix',
      fontSize: 48,
      fontStyle: 'bold',
      color: '#ffffff',
      align: 'center',
    });

    this.score = this.add.text(this.game.config.width * 0.4, 170, `Score: ${this.playerModel.score} `, {
      fontFamily: 'Arcadepix',
      fontSize: 24,
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
      'Exit',
      'Main'
    );
  }
}
