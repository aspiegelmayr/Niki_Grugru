import Phaser from 'phaser'

import HelloWorldScene from './scenes/HelloWorldScene'

const config: Phaser.Types.Core.GameConfig = {
  width:800,
  height: 600,
  parent: 'phaser-container',
  title: "Mygame",
  version: "0.0.1",
  scene: [HelloWorldScene],
}

export default new Phaser.Game(config)
