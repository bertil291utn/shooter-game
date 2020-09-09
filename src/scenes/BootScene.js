import Phaser from 'phaser';
import LogoImg from '../content/logo-war-prime.png';

export default class BootScene extends Phaser.Scene {
  constructor() {
    super('Boot');
  }

  preload() {
    this.load.image('logo', LogoImg);
  }

  create() {
    this.scene.start('Preloader');
  }
}
