import Phaser from 'phaser';
import * as React from 'react';

import HelloWorldScene from './scenes/DressUpScene';

const DressUpGame: React.FunctionComponent = () => {

    React.useEffect(() => {
        const game = new Phaser.Game({
            parent: 'game-root',
            type: Phaser.WEBGL,
            width: '100%',
            height: '100%',
            // backgroundColor: '#081919',
            backgroundColor: '#FEF5CB',
            physics: {
                default: 'arcade',
                arcade: {
                    debug: false,
                },
            },
        });
        game.scene.add('MainScene', HelloWorldScene, true); //socket: ScreenSocket.getInstance(socket)

        // game.world.setBounds(0,0,7500, window.innerHeight)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
          <GameContent/>
  );
  }

export default DressUpGame;

const GameContent: React.FunctionComponent = () => (
  <div>
      <div id="game-root" data-testid="game-container"></div>
  </div>)

