/* eslint-disable no-underscore-dangle */
import 'jest-canvas-mock';
import UserScene from '../scenes/UserScene';
import MainScene from '../scenes/MainScene';
import PlayerModel from '../PlayerModel';

describe('When user input username', () => {
  const userScene = new UserScene();
  it('returns true if there are more than 4 characters', () => {
    expect(userScene.moreThanFourChars('betos')).toBeTruthy();
  });
  it('returns false if there are less than 4 characters', () => {
    expect(userScene.moreThanFourChars('bes')).toBeFalsy();
  });
});

describe('Main scene', () => {
  const mainScene = new MainScene();
  const key = 'gameShooter';
  localStorage.setItem(key, JSON.stringify({ _username: 'bertil', _score: 0 }));
  const json = localStorage.getItem(key);
  it('returns User if it\'s not already set localStorage item', () => {
    expect(mainScene.currentScene('shooterGame')).toBe('User');
  });

  it('return true if currentSceneVar is game', () => {
    const playerModel = new PlayerModel();
    playerModel.username = json._username;
    playerModel.score = json._score;
    expect(mainScene.assignPlayerObject('Game', localStorage.getItem(key))).toBeInstanceOf(PlayerModel);
  });
});