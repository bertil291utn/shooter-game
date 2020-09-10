/* eslint-disable no-underscore-dangle */
import 'jest-canvas-mock';
import UserScene from '../scenes/UserScene';
import MainScene from '../scenes/MainScene';
import PlayerModel from '../PlayerModel';
import localStorageMethod from '../localStorage';

const key = 'gameShooter';
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
  localStorage.setItem(key, JSON.stringify({ _username: 'bertil', _score: 0 }));
  it('returns User if it\'s not already set localStorage item', () => {
    expect(mainScene.currentScene('shooterGame')).toBe('User');
  });

  it('return true if currentSceneVar is game', () => {
    expect(mainScene.assignPlayerObject('Game', localStorage.getItem(key))).toBeInstanceOf(PlayerModel);
  });
});

describe('Local storage', () => {
  const playerModel = new PlayerModel();
  playerModel.username = 'betos';
  playerModel.score = 0;
  it('returns true if the local storage was save', () => {
    localStorageMethod.setPlayer(key, playerModel);
    expect(localStorage.getItem(key)).not.toBeNull();
  });
});