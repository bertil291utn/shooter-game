/* eslint-disable array-callback-return */
import Phaser from 'phaser';
import config from '../config/config';
import Button from '../Objects/Button';
import API from '../api';

export default class LeaderBoardScene extends Phaser.Scene {
  constructor() {
    super('LeaderBoard');
  }

  async create() {
    this.fontFamily = 'Arcadepix';
    const titleConfig = {
      fontSize: 35,
      fontFamily: this.fontFamily,
      color: '#3DC93F',
    };

    this.add.text(100, 20, 'Rank', titleConfig);
    this.add.text(300, 20, 'Score', titleConfig);
    this.add.text(500, 20, 'Name', titleConfig);

    const dataConfig = {
      fontSize: 20,
      fontFamily: this.fontFamily,
      color: '#fff',
    };

    const textLoading = this.add.text(config.width / 2 - 40, config.height / 2, 'Loading ...', dataConfig);
    let data = await API.getLeaderBoard();
    textLoading.destroy();
    data.sort((a, b) => b.score - a.score);
    data = data.slice(0, 10);
    let initialYPos = 90;
    data.map((elem, index) => {
      this.add.text(150, initialYPos, `${index + 1}`, dataConfig);
      this.add.text(350, initialYPos, `${elem.score}`, dataConfig);
      this.add.text(525, initialYPos, `${elem.user}`, dataConfig);
      initialYPos += 30;
    });

    this.mainButton = new Button(
      this,
      400,
      500,
      'blueButton1',
      'blueButton2',
      'Menu',
      'Main',
    );
  }
}
