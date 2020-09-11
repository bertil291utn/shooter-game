/* eslint-disable no-irregular-whitespace */
/* eslint-disable no-underscore-dangle */
import 'jest-canvas-mock';
// import UserScene from '../scenes/UserScene';
import MainScene from '../scenes/MainScene';
import PlayerModel from '../PlayerModel';
import localStorageMethod from '../localStorage';
import API from '../api';
import '@babel/polyfill';
import userSceneLogic from '../userSceneLogic';

const key = 'gameShooter';
describe('When user input username', () => {
  // const userScene = new UserScene();
  it('returns true if there are more than 4 characters', () => {
    expect(userSceneLogic.moreThanFourChars('betos')).toBeTruthy();
  });
  it('returns false if there are less than 4 characters', () => {
    expect(userSceneLogic.moreThanFourChars('bes')).toBeFalsy();
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

describe('APIs', () => {
  it('returns an array object with the data ', () => {
    API.getLeaderBoard().then(data => {
      expect(data).toBeInstanceOf(Array);
    });
  });

  it('returns a message after post a object ', () => {
    const playerModel = new PlayerModel();
    playerModel.username = 'betos';
    playerModel.score = 0;
    API.setPlayer(playerModel).then(data => {
      expect(data).toMatch(/Leaderboard score create./);
    });
  });

  it('trows an error after post a non object ', () => {
    const playerModel = new PlayerModel();
    playerModel.username = 1;
    playerModel.score = 0;
    API.setPlayer(playerModel).then(data => {
      expect(data).toThrow(Error);
    });
  });
});