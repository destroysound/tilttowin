/* globals __DEV__ */
import Phaser from 'phaser'
import Enemy from '../sprites/Enemy'
import Player from '../sprites/Player'
import lang from '../lang'

export default class extends Phaser.State {
  init() { }
  preload() { }

  create() {
    game.physics.startSystem(Phaser.Physics.P2JS);

    const bannerText = lang.text('welcome')
    let banner = this.add.text(this.world.centerX, this.game.height - 80, bannerText, {
      font: '80px Bangers',
      fill: '#77BFA3',
      smoothed: false
    })

    banner.padding.set(10, 16)
    banner.anchor.setTo(0.5)

    this.enemy = new Enemy({
      game: this.game,
      x: this.world.centerX+200,
      y: this.world.centerY,
      asset: 'mushroom'
    })

    this.player = new Player({
      game: this.game,
      x: this.world.centerX,
      y: this.world.centerY,
      asset: 'mushroom'
    })

    this.game.add.existing(this.enemy)
    this.game.add.existing(this.player)
  }

  render() {
//    if (__DEV__) {
//      this.game.debug.spriteInfo(this.mushroom, 32, 32)
//    }
  }
}
