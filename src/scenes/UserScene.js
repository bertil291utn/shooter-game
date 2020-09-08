import Phaser from 'phaser';
import config from '../config/config';

export default class UserScene extends Phaser.Scene {
  constructor() {
    super('User');
  }

  create() {
    this.add.image(400, 300, 'sprBg0');
    const element = this.add
      .dom(config.width / 2, config.height / 2 - 200)
      .createFromCache('my_form');

    element.setPerspective(800);
    element.addListener('click');
    element.on('click', (event) => {
      if (event.target.name === 'backButton') {
        element.scene.scene.start('Main');
      }
      if (event.target.name === 'confirmButton') {
        const inputUsername = element.getChildByID('username');
        if (!inputUsername.value) return;
        const pattern = /^\w{4,}$/;
        const moreThanFourChars = pattern.test(inputUsername.value);
        if (!moreThanFourChars) return;
        console.log(inputUsername.value);
        element.scene.scene.start('Instructions');
      }
    });
  }
}
