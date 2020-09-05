import 'phaser';
import LogoImg from '../assets/zenva_logo.png';

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
