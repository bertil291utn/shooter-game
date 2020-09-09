import 'jest-canvas-mock';
import UserScene from '../scenes/UserScene';

describe('When user input username', () => {
  const userScene = new UserScene();
  it('returns true if there are more than 4 characters', () => {
    expect(userScene.moreThanFourChars('betos')).toBeTruthy()
  });
  it('returns false if there are less than 4 characters', () => {
    expect(userScene.moreThanFourChars('bes')).toBeFalsy();
  });
});