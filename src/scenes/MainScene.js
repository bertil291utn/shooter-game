/* eslint-disable max-len */
/* eslint-disable no-underscore-dangle */
/* eslint-disable class-methods-use-this */
/* eslint-disable comma-dangle */
import Phaser from 'phaser';
import config from '../config/config';
import Button from '../Objects/Button';
import PlayerModel from '../PlayerModel';

export default class MainScene extends Phaser.Scene {
  constructor() {
    super('Main');
  }

  init() {
    this.key = this.sys.game.globals.localStorage;
    this.currentSceneVar = this.currentScene(this.key);
  }

  currentScene(key) {
    return localStorage.getItem(key) !== null ? 'Game' : 'User';
  }

  create() {
    this.sys.game.globals.playerModel = this.assignPlayerObject(this.currentSceneVar, localStorage.getItem(this.key));
    this.add.image(400, 300, 'phaserLogo');
    this.gameButton = new Button(
      this,
      config.width / 2,
      config.height / 2 - 100,
      'blueButton1',
      'blueButton2',
      'Play',
      this.currentSceneVar
    );

    this.optionsButton = new Button(
      this,
      config.width / 2,
      config.height / 2,
      'blueButton1',
      'blueButton2',
      'Options',
      'Options'
    );

    this.creditsButton = new Button(
      this,
      config.width / 2,
      config.height / 2 + 100,
      'blueButton1',
      'blueButton2',
      'Board',
      'LeaderBoard'
    );

    this.model = this.sys.game.globals.model;
    if (this.model.musicOn && !this.model.bgMusicPlaying) {
      this.bgMusic = this.sound.add('bgMusic', { volume: 0.5, loop: true });
      this.bgMusic.play();
      this.model.bgMusicPlaying = true;
      this.sys.game.globals.bgMusic = this.bgMusic;
    }
  }

  assignPlayerObject(currentSceneVar, value) {
    if (currentSceneVar === 'Game') {
      const playerModel = new PlayerModel();
      const json = JSON.parse(value);
      playerModel.username = json._username;
      playerModel.score = json._score;
      return playerModel;
    }
    return false;
  }

  centerButton(gameObject, offset = 0) {
    Phaser.Display.Align.In.Center(
      gameObject,
      this.add.zone(
        config.width / 2,
        config.height / 2 - offset * 100,
        config.width,
        config.height
      )
    );
  }
}
