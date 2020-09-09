import Phaser from 'phaser';
import Button from '../Objects/Button';

export default class LeaderBoardScene extends Phaser.Scene {
  constructor() {
    super('LeaderBoard')
  }

  create() {
    this.fontFamily = 'Arcadepix'
    const titleConfig = {
      fontSize: 35,
      fontFamily: this.fontFamily,
      color: '#3DC93F'
    }

    this.add.text(100, 20, 'Rank', titleConfig);
    this.add.text(300, 20, 'Score', titleConfig);
    this.add.text(500, 20, 'Name', titleConfig);

    const dataConfig = {
      fontSize: 20,
      fontFamily: this.fontFamily,
      color: '#fff'
    }
    //test apis
// loop
// create an object for each line
    this.add.text(150, 90, `1`, dataConfig);
    this.add.text(350, 90, `900`, dataConfig);
    this.add.text(525, 90, `betos`, dataConfig);

    this.mainButton = new Button(
      this,
      400,
      500,
      'blueButton1',
      'blueButton2',
      'Exit',
      'Menu'
    );
  }
}
