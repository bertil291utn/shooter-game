/* eslint-disable no-underscore-dangle */
export default class PlayerModel {
  constructor() {
    this._username = '';
    this._score = 0;
  }

  set username(value) {
    this._username = value;
  }

  get username() {
    return this._username;
  }

  set score(value) {
    this._score = value;
  }

  get score() {
    return this._score;
  }
}
