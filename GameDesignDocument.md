<div align="center"><img src="https://user-images.githubusercontent.com/24902525/92851328-0f52c680-f3b3-11ea-8d9a-3020b54e32ba.png" alt="image" width="600" /></div>

# Save to the King George

v1.0.1

**Written by Bertil Tandayamo**

September 11, 2020

# Table of contents

- [Story Overview](#Story-Overview)
- [Game Controls](#Game-Controls)
- [Front End of the game](#Front-End-of-the-game)
  - [Studio Logo](#Studio-Logo)
  - [Third party applications](#Third-party-applications)
- [Title/start screen](#Title/start-screen)
- [Scenes](#Scenes)
- [Game flow chart](#Game-flow-chart)
- [HUD system](#HUD-system)
- [Player characters](#Player-characters)
  - [Player](#Player)
  - [Enemies](#Enemies)
- [Player skills](#Player-skills)
- [Health](#Health)
- [Scoring](#Scoring)
- [Music and SFX](#Music-and-SFX)
  - [Background music](#Background-music)
  - [Other sounds](#Other-sounds)

## Story Overview

It's the 3100 outsiders enemy known as Spaniards are trying to conquer and rule our world. Your purpose is keep King George alive.
Anything happens to the King our world will be devastated by the enemy.

## Game Controls

![image](https://image.shutterstock.com/image-vector/arrow-button-on-keyboard-icon-260nw-339331691.jpg)

- Use arrow keys on your to move your ship
- Space bar to shot

## Front End of the game

### Studio Logo

<div align="center"><img src="src/content/images/logo-war-prime.png" alt="image" width="400" /></div>
  
### Third party applications

- Phaser framework
- JavaScript ES6 Modules
- HTML5
- Webpack
- Babel
- Phaser

## Title/start screen

The game it's going to start with the studio logo and a progress bar preloading all the game content

<div align="center"><img src="https://user-images.githubusercontent.com/24902525/92948077-735ea480-f41e-11ea-886a-2301f8ffae2f.png" alt="image" width="500" /></div>

## Scenes

The game has 3 options at the main scene

- **Play**.- Init the game only if you already save your username, else enter your name in the form
- **Options**.- Mute the background music and game sounds
- **Instructions**.- Display instructions how to play  
- **Leader board**.- Display only the top ten gamers, so you better be good to get this position
- **Game Over**.- After finish the game you could reset or exit the game
- **Game**.- Scene where the game happens you kill the enemies to save the King
- **Input User**.- This scene is going to appear if it's only the first time

## Game flow chart
<div align="center"><img src="https://user-images.githubusercontent.com/24902525/92953903-254e9e80-f428-11ea-812c-cb1317b31de1.png" alt="image" width="700" /></div>


## HUD system 
There's no any health status, but we could see a score displaying each time player explode or kill an enemy 

## Player characters
  ### Player
    
  ![image](src/content/images/player.png)

  This is the player, designed to move all over directions

  ### Enemies

  **Square ship**

  ![image](src/content/images/sprEnemy2.png)

  It's not going to shoot any bullet just going ahead to you

  **Shooters ship**

  ![image](src/content/images/sprEnemy0.png)

  This characters shoot bullets just right ahead to you

  **Bombs**

  ![image](src/content/images/sprEnemy1.png)

  This bombs going to you to explode where ever you are they're going to find you

## Player skills


**Player**.- Moves in any directions around the game scene

**Square and ship enemies**.- Might move only in right line ahead to the player

**Bombs**.- Move in any directions always searching and ahead to the player



## Health 

**Player**.- Die with one shot, have one life and game ends

**Enemies**.-Disappear form the game scene after one shot

## Scoring
  Add only one metric to the player. When a player explode an enemies their score adds in ten point more

## Music and SFX

### Background music

A war background music to create the environment about chaos and war, by ashamaluevmusic taken from [SoundCloud](https://soundcloud.com/ashamaluevmusic/wartime?in=ashamaluevmusic/sets/music-for-gaming-videos)

### Other sounds

- Laser sound when a player or enemy shot a bullet by [OpenGameArt](https://opengameart.org/)
- Explode sound when a player or enemy explode by [OpenGameArt](https://opengameart.org/)


***

OpenSource Project, 2020

Bertil Tandayamo