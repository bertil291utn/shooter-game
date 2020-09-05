import Phaser from 'phaser';
import zenvaLogoImg from "../assets/zenva_logo.png";
 
export default class GameScene extends Phaser.Scene {
  constructor () {
    super('Game');
  }
 
  preload () {
    // load images
    // this.load.image('logo', zenvaLogoImg);
  }
 
  create () {
    this.add.image(400, 300, 'logo');
  }
};