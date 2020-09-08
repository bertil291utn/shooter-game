import Phaser from 'phaser';
import config from './config/config';
import Model from './Model';
import BootScene from './scenes/BootScene';
import PreloaderScene from './scenes/PreloaderScene';
import MainScene from './scenes/MainScene';
import OptionsScene from './scenes/OptionsScene';
import LeaderBoardScene from './scenes/LeaderBoardScene';
import GameScene from './scenes/GameScene';
import GameOverScene from './scenes/GameOverScene';
import UserScene from './scenes/UserScene';

class Game extends Phaser.Game {
  constructor() {
    super(config);
    const model = new Model();
    this.globals = { model, bgMusic: null };
    this.scene.add('Boot', BootScene);
    this.scene.add('Game', GameScene);
    this.scene.add('GameOver', GameOverScene);
    this.scene.add('LeaderBoard', LeaderBoardScene);
    this.scene.add('Main', MainScene);
    this.scene.add('Options', OptionsScene);
    this.scene.add('Preloader', PreloaderScene);
    this.scene.add('User', UserScene);
    this.scene.start('Boot');
  }
}

window.game = new Game();
